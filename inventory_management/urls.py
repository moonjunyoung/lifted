from django.urls import path

from inventory_management.views import (
    ProductDetailView,
    ProductListView,
    ShopDetailView,
    ShopListView,
)

urlpatterns = [
    path("shops/", ShopListView.as_view(), name="shop-list"),
    path("shops/<int:pk>/", ShopDetailView.as_view(), name="shop-detail"),
    path("product", ProductListView.as_view(), name="product-list"),
    path(
        "product/<int:product_id>", ProductDetailView.as_view(), name="product-detail"
    ),
]
