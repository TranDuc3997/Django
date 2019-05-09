from django.shortcuts import render

from rest_framework import status
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.views import APIView, Response
from rest_framework.decorators import api_view
from rest_framework import filters
import json
from django.http import HttpResponse
from django.http import JsonResponse
# from django.utils import simplejson

import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)


from django.core import serializers

class LoaiHangViewSet(viewsets.ModelViewSet):
    queryset = LoaiHang.objects.all()
    serializer_class = LoaiHangSerializer

class HangHoaViewSet(viewsets.ModelViewSet):
    queryset = HangHoa.objects.all()
    serializer_class = HangHoaSerializer

class TichXuViewSet(viewsets.ModelViewSet):
    queryset = TichXu.objects.all()
    serializer_class = TichXuSerializer

class KhachHangViewSet(viewsets.ModelViewSet):
    queryset = KhachHang.objects.all()
    serializer_class = KhachHangSerializer

class ChucVuViewSet(viewsets.ModelViewSet):
    queryset = ChucVu.objects.all()
    serializer_class = ChucVuSerializer

class NhanVienViewSet(viewsets.ModelViewSet):
    queryset = NhanVien.objects.all()
    serializer_class = NhanVienSerializer

class HinhThucThanhToanViewSet(viewsets.ModelViewSet):
    queryset = HinhThucThanhToan.objects.all()
    serializer_class = HinhThucThanhToanSerializer

class KhuyenMaiViewSet(viewsets.ModelViewSet):
    queryset = KhuyenMai.objects.all()
    serializer_class = KhuyenMaiSerializer

class NhaCungCapViewSet(viewsets.ModelViewSet):
    queryset = NhaCungCap.objects.all()
    serializer_class = NhaCungCapSerializer

class PhieuNhapViewSet(viewsets.ModelViewSet):
    queryset = PhieuNhap.objects.all()
    serializer_class = PhieuNhapSerializer

class ChiTietPhieuNhapViewSet(viewsets.ModelViewSet):
    queryset = ChiTietPhieuNhap.objects.all()
    serializer_class = ChiTietPhieuNhapSerializer

class PhieuNhapKhoViewSet(viewsets.ModelViewSet):
    queryset = PhieuNhapKho.objects.all()
    serializer_class = PhieuNhapKhoSerializer

class ChiTietPhieuNhapKhoViewSet(viewsets.ModelViewSet):
    queryset = ChiTietPhieuNhapKho.objects.all()
    serializer_class = ChiTietPhieuNhapKhoSerializer

class PhieuXuatKhoViewSet(viewsets.ModelViewSet):
    queryset = PhieuXuatKho.objects.all()
    serializer_class = PhieuXuatKhoSerializer

class HoaDonViewSet(viewsets.ModelViewSet):
    queryset = HoaDon.objects.all()
    serializer_class = HoaDonSerializer

class ChiTietHoaDonViewSet(viewsets.ModelViewSet):
    queryset = ChiTietHoaDon.objects.all()
    serializer_class = ChiTietHoaDonSerializer

class PhieuGiaoHangViewSet(viewsets.ModelViewSet):
    queryset = PhieuGiaoHang.objects.all()
    serializer_class = PhieuGiaoHangSerializer
 
class LoginView(APIView):
    def post(self, request, format=None):
            nhanvien = NhanVien.objects.filter(email = request.data['username'], sdtnv = request.data['password']).values('id', 'tennv')
            if not nhanvien:
                return JsonResponse({'result':'404'})
            else:
                response =  list(nhanvien) #convert queryset to list
                return JsonResponse(response, safe=False)

class DetailNhanVien(APIView):
    def get(self, request, format=None):
        view = ViewNhanVien.objects.all().values('id','tennv','diachinv','sdtnv','email','gioitinh','cmnd','chucvu_id','tencv')
        response = list(view)
        return JsonResponse(response, safe=False)

class DetailHangHoa(APIView):
    def get(self, request, format=None):
        view = ViewHangHoa.objects.all().values('id','tenhang','dongia','tinhtrang','mota','soluong','hinhanh','loaihang_id','tenloai')
        response = list(view)
        return JsonResponse(response, safe=False)