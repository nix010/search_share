from json import JSONDecodeError

from core.crawlers.base_crawler import BaseCrawler, RequestErrorException


def format_brand_data(data):
    return (data.get("brandName") or '').strip()


class LazadaSearchStratery(BaseCrawler):

    search_url = 'https://www.lazada.vn/catalog/?q={keyword}&n=100&sort=popularity&ajax=true&' \
                 '_keyori=ss&from=input'

    def crawl_now(self):
        keyword = self.url_encode_word(self.keyword)
        url = self.search_url.format(keyword=keyword)

        self.resp = self.get(url)
        print(self.resp.request.url)
        if not self.resp.ok:
            raise RequestErrorException()
        print(self.resp.text[:200])
        for data in self.get_data_list():
            yield format_brand_data(data)

    def get_data_list(self):

        try:
            data = self.resp.json()
            return data['mods']['listItems']
        except KeyError:
            raise RequestErrorException('Lazada captcha detected')
        except JSONDecodeError:
            raise RequestErrorException('Lazada special format for this keyword')

