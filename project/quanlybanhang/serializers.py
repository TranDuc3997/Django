from rest_framework import serializers
from .models import *
 
class LoaiHangSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoaiHang
        fields = '__all__'

class HangHoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = HangHoa
        fields = '__all__'

class TichXuSerializer(serializers.ModelSerializer):
    class Meta:
        model = TichXu
        fields = '__all__'

class KhachHangSerializer(serializers.ModelSerializer):
    class Meta:
        model = KhachHang
        fields = '__all__'

class ChucVuSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChucVu
        fields = '__all__'

class NhanVienSerializer(serializers.ModelSerializer):
    class Meta:
        model = NhanVien
        fields = '__all__'

class HinhThucThanhToanSerializer(serializers.ModelSerializer):
    class Meta:
        model = HinhThucThanhToan
        fields = '__all__'

class KhuyenMaiSerializer(serializers.ModelSerializer):
    class Meta:
        model = KhuyenMai
        fields = '__all__'

class NhaCungCapSerializer(serializers.ModelSerializer):
    class Meta:
        model = NhaCungCap
        fields = '__all__'

class PhieuNhapSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhieuNhap
        fields = '__all__'

class ChiTietPhieuNhapSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChiTietPhieuNhap
        fields = '__all__'

class PhieuNhapKhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhieuNhapKho
        fields = '__all__'

class ChiTietPhieuNhapKhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChiTietPhieuNhapKho
        fields = '__all__'

class PhieuXuatKhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhieuXuatKho
        fields = '__all__'

class HoaDonSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoaDon
        fields = '__all__'

class ChiTietHoaDonSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChiTietHoaDon
        fields = '__all__'

class PhieuGiaoHangSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhieuGiaoHang
        fields = '__all__'

class ViewNhanVienSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViewNhanVien
        fields = '__all__'

class ViewHangHoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViewHangHoa
        fields = '__all__'
