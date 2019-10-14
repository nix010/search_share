from collections import Counter
from datetime import datetime, timedelta

from core.crawlers.strateries.lazada_search_stratery import LazadaSearchStratery
from core.crawlers.strateries.shopee_search_stratery import ShopeeSearchStratery

cache_aggregator = {}
NO_BRAND = 'No Brand'


def brand_counter(brand_name_list):
    counter = Counter(brand_name_list)
    return dict(counter)


def format_brand_name(brand_name):
    """
    Map the brand name back to a unified name for the report chart data
    :param brand_name:
    :return:
    """
    mapper = {
        None: NO_BRAND,
        'no': NO_BRAND,
        'No': NO_BRAND,
        'None': NO_BRAND,
        '0': NO_BRAND,
        '0.': NO_BRAND,
        '': NO_BRAND,
        'Maybelline New': 'Maybelline',
        'BOURJOIS': 'Bourjois',
        "L'Oreal Paris": "L'Oreal",
        "L'ORÉAL": "L'Oreal",
        "BbiA": "Bbia",
    }
    return mapper.get(brand_name, brand_name)


def search_share_aggregator(query_keyword, site_name):
    cache_key = f'{site_name}_{query_keyword}'
    if cache_aggregator.get(cache_key) and\
            datetime.now() < cache_aggregator[cache_key]['expired_at']:
        print('cache_hit')
        return cache_aggregator[cache_key]['data']

    Crawler = {
        'shopee': ShopeeSearchStratery,
        'lazada': LazadaSearchStratery,
    }.get(site_name)
    data = Crawler(keyword=query_keyword).crawl_now()
    result = brand_counter(list(map(format_brand_name, data)))
    cache_aggregator[cache_key] = {
        'data': result,
        'expired_at': datetime.now() + timedelta(minutes=5)
    }
    return result
