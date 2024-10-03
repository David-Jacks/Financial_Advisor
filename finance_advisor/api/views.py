from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

# Create your views here.
def main(request):
    return HttpResponse("Hello")

def helloWorld(request):
    return HttpResponse("<h2>Hello World</h2>")