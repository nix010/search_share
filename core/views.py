from django.views.generic import TemplateView

from core.aggregator import search_share_aggregator
from core.crawlers.base_crawler import RequestErrorException


def merge_result(dict_a, dict_b, top_result=None):
    list_brand = sorted(
        set(list(dict_a.keys()) + list(dict_b.keys())),
        key=lambda brand: dict_a.get(brand, 0) + dict_b.get(brand, 0),
        reverse=True
    )
    if top_result:
        list_brand = list_brand[:top_result]
    return list_brand, [
        (dict_a.get(brand, 0), dict_b.get(brand, 0))
        for brand in list_brand
    ]


class ReportSearchView(TemplateView):

    template_name = 'index.html'
    limit_result = None

    def get(self, request, *args, **kwargs):
        query_keyword = request.GET.get('q', '')
        limit = request.GET.get('limit', 10)
        limit = int(limit)
        if not query_keyword:
            return self.render_to_response({})
        try:
            shopee = search_share_aggregator(query_keyword, 'shopee')
            lazada = search_share_aggregator(query_keyword, 'lazada')
            brands, share_count = merge_result(shopee, lazada, limit)

            return self.render_to_response({
                'brands': brands,
                'share_count': share_count,
            })

        except RequestErrorException as e:
            return self.render_to_response({'error': str(e)})
