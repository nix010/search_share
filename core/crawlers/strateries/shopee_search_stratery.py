from core.crawlers.base_crawler import BaseCrawler, RequestErrorException


def format_brand_data(data):
    return (data.get("brand") or '').strip()


class ShopeeSearchStratery(BaseCrawler):

    search_url = 'https://shopee.vn/api/v2/search_items/?' \
                 'by=relevancy&keyword={keyword}&limit=100' \
                 '&newest=100&order=desc&page_type=search'

    def crawl_now(self):
        keyword = self.url_encode_word(self.keyword)
        url = self.search_url.format(keyword=keyword)

        self.resp = self.get(url)
        if not self.resp.ok:
            raise RequestErrorException()
        for data in self.get_data_list():
            yield format_brand_data(data)

    def get_data_list(self):
        data = self.resp.json()
        try:
            return data['items']
        except KeyError:
            raise RequestErrorException('Format data errored')
