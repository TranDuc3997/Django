from django.shortcuts import render
from rest_framework.parsers import FileUploadParser
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
        view = ViewHangHoa.objects.all().values('id','tenhang','dongia','tinhtrang','mota','soluong','hinhanh','loaihang_id','khuyenmai_id','nhacungcap_id','tenloai','tenncc')
        response = list(view)
        return JsonResponse(response, safe=False)
class DetailKhuyenMai(APIView):
    def get(self, request, format=None):
        view = ViewKhuyenMai.objects.all().values('id','ngaybd','ngaykt','giagiam','tenhang','hanghoa_id','hinhanh','dongia')
        response = list(view)
        return JsonResponse(response, safe=False)

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):

      file_serializer = FileSerializer(data=request.data)

      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomListSanPham(APIView):
    def post(self, request, *args, **kwargs):
        loaihang = request.data['loaihang']
        start = request.data['start']
        limit = request.data['limit']
        key = request.data['key']
        gia = request.data['gia']
        sql = ''' SELECT hh.id, hh.tenhang, hh.tinhtrang, hh.mota, hh.soluong, hh.khuyenmai_id, hh.hinhanh, hh.loaihang_id
                    FROM quanlybanhang_hanghoa hh, quanlybanhang_loaihang lh
                    WHERE lh.id = hh.loaihang_id '''
        param = []
        if( request.data['loaihang'] is None):
            sql = ''' SELECT hh.id, hh.tenhang, hh.tinhtrang, hh.mota, hh.soluong, hh.khuyenmai_id, hh.hinhanh, hh.loaihang_id
                    FROM quanlybanhang_hanghoa hh, quanlybanhang_loaihang lh
                    WHERE lh.id = hh.loaihang_id
                    ORDER BY hh.ngaymoban DESC
                    LIMIT %s, %s '''
            param = [start,limit]
        else:
            sql = ''' SELECT hh.id, hh.tenhang, hh.tinhtrang, hh.mota, hh.soluong, hh.khuyenmai_id, hh.hinhanh, hh.loaihang_id
                    FROM quanlybanhang_hanghoa hh, quanlybanhang_loaihang lh
                    WHERE hh.loaihang_id = %s
                    AND lh.id = hh.loaihang_id
                    ORDER BY hh.ngaymoban DESC
                    LIMIT %s, %s '''
            param = [loaihang,start,limit]
        response = list(HangHoa.object.raw(sql,param))
        return JsonResponse(response, safe=False)
