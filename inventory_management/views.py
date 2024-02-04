from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class ShopListView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        pass


class ShopDetailView(APIView):
    def delelte(self, request):
        pass


class ProductListView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        pass


class ProductDetailView(APIView):
    def get(self, request):
        pass

    def delelte(self, request):
        pass
