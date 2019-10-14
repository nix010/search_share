import random
import urllib

import requests
from bs4 import BeautifulSoup as BS
from requests.cookies import cookiejar_from_dict

from .user_agents import USER_AGENTS


class BaseCrawler(object):

    default_headers = {
        'Connection': 'keep-alive',
        'Accept-Language': 'en-US, en',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': '*/*',
        'Cache-Control': 'max-age=0',
        'x-requested-with': 'XMLHttpRequest',
    }
    page = 1
    data_count = 0
    keyword = '' # for search results crawling
    can_stop = False
    is_request_error = False
    is_data_error = False
    is_format_error = False
    is_random_agents = False

    def __init__(self, *args, **kwargs):
        self.args = args
        for key, value in kwargs.items():
            setattr(self, key, value)
        self._make_session()

    def _make_session(self):
        if not hasattr(self, 'r'):
            self.r = requests.Session()

    def write_file(self, content, filename='file'):
        f = open(filename, 'w')
        f.write(content)
        f.close()

    def url_encode_word(self, word):
        return urllib.parse.quote(word)

    def update_cookies(self, cookies):
        cookies = {
            **self.r.cookies.get_dict(),
            **cookies
        }
        self.r.cookies = cookiejar_from_dict(cookies)

    def format_data(self, data):
        return data

    def crawl_now(self):
        return None

    def can_keep_crawling(self):
        return True

    def get_data_list(self):
        return []

    def get(self, url, **kwargs):
        return self.r.get(url, headers=self.get_headers(), **kwargs)

    def post(self, url, data, **kwargs):
        return self.r.post(url, data=data, headers=self.get_headers(), **kwargs)

    def get_headers(self):
        useragent = USER_AGENTS[0]
        if self.is_random_agents:
            useragent = USER_AGENTS[random.randrange(0, len(USER_AGENTS))]
        return { **self.default_headers, 'User-Agent' : useragent }

    def parse_html(self, text):
        return BS(text, 'html.parser')


class BaseCrawlerException(Exception):
    can_retry = True
    can_continue = True
    time_wait_on_retry = None #second


class RequestErrorException(BaseCrawlerException):
    can_retry = False
    time_wait_on_retry = 300.

