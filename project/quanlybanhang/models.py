
from django.db import models
class LoaiHang(models.Model):
    tenloai = models.CharField(max_length = 100, null= True)

    class Meta:
        verbose_name = "LoaiHang"
        verbose_name_plural = "LoaiHangs"

    def __unicode__(self):
        return '%s' %(self.tenloai)
        
class TichXu(models.Model):
    ngaybatdau = models.DateField(null = True)
    ngayketthuc = models.DateField(null = True)
    tile = models.FloatField(null = True)

    class Meta:
        verbose_name = "TichXu"
        verbose_name_plural = "TichXus" 

class KhachHang(models.Model):
    tenkh = models.CharField(max_length=50)
    diachikh = models.CharField(max_length= 100, null = True)
    sdtkh = models.CharField(max_length = 13)
    danhgia = models.CharField(max_length = 50)
    tendangnhap = models.CharField(max_length =50, unique=True)
    matkhau = models.CharField(max_length = 50)
    tichxu  = models.ForeignKey(TichXu, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = "KhachHang"
        verbose_name_plural = "KhachHangs"

class ChucVu(models.Model):
    tencv = models.CharField(max_length = 50)

    class Meta:
        verbose_name = "ChucVu"
        verbose_name_plural = "ChucVus" 

class NhanVien(models.Model):
    tennv = models.CharField(max_length = 50)
    diachinv = models.CharField(max_length = 50, null = True)
    sdtnv = models.CharField(max_length = 13, null = True)
    email = models.CharField(max_length = 100)
    gioitinh = models.IntegerField(null = True)
    cmnd = models.CharField(max_length = 15, null = True)
    chucvu = models.ForeignKey(ChucVu, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = "NhanVien"
        verbose_name_plural = "NhanViens"

class HinhThucThanhToan(models.Model):
    tenhinhthuctt = models.CharField(max_length = 50)

    class Meta:
        verbose_name = "HinhThucThanhToan"
        verbose_name_plural = "HinhThucThanhToans" 

class KhuyenMai(models.Model):
    ngaybd = models.DateField(null = True)
    ngaykt = models.DateField(null = True)
    tenkm = models.CharField(max_length = 50, null= True)
    giagiam = models.FloatField(null = True)
    noidungkm = models.CharField(max_length = 100000, null= True)
    hinhanh = models.CharField(max_length = 100000)
    class Meta:
        verbose_name = "KhuyenMai"
        verbose_name_plural = "KhuyenMais"


class NhaCungCap(models.Model):
    tenncc = models.CharField(max_length = 50, null = True)
    diachincc = models.CharField(max_length = 50, null = True)
    sdtncc = models.CharField(max_length = 13, null = True)
    email = models.EmailField(null = True)

    class Meta:
        verbose_name = "NhaCungCap"
        verbose_name_plural = "NhaCungCaps" 

class HangHoa(models.Model):
    tenhang = models.CharField(max_length = 50)
    dongia  = models.FloatField(null = True)
    tinhtrang = models.IntegerField(null = True)
    mota = models.CharField(max_length = 200, null = True)
    soluong = models.IntegerField(null = True)
    hinhanh = models.CharField(max_length = 2000, null = True)
    ngaymoban = models.DateField(null = True)
    loaihang = models.ForeignKey(LoaiHang, on_delete=models.DO_NOTHING)
    nhacungcap = models.ForeignKey(NhaCungCap,on_delete=models.DO_NOTHING)
    khuyenmai = models.ForeignKey(KhuyenMai, on_delete= models.DO_NOTHING, null = True, blank = True)
    class Meta:
        verbose_name = "HangHoa"
        verbose_name_plural = "HangHoas" 

class PhieuNhap(models.Model):
    ngaynhap = models.DateField(null = True)
    tonggiatri = models.FloatField(null = True)
    nhacungcap = models.ForeignKey(NhaCungCap, on_delete= models.DO_NOTHING)
    nhanvien = models.ForeignKey(NhanVien, on_delete= models.DO_NOTHING)

    class Meta:
        verbose_name = "PhieuNhap"
        verbose_name_plural = "PhieuNhaps"

class ChiTietPhieuNhap(models.Model):
    soluongnhap = models.IntegerField(null = True)
    dongianhap = models.FloatField(null = True)
    thanhtien = models.FloatField(null = True)
    hanghoa = models.ForeignKey(HangHoa, on_delete= models.DO_NOTHING)
    phieunhap = models.ForeignKey(PhieuNhap, on_delete= models.DO_NOTHING)
    
    class Meta:
        verbose_name = "ChiTietPhieuNhap"
        verbose_name_plural = "ChiTietPhieuNhaps"

class PhieuNhapKho(models.Model):
    tenphieunhap = models.CharField(max_length = 50)
    nhanvien = models.ForeignKey(NhanVien, on_delete= models.DO_NOTHING)
    nhacungcap = models.ForeignKey(NhaCungCap, on_delete= models.DO_NOTHING)
    ngaynhap = models.DateField(null = True)
    tonggiatri = models.FloatField(null = True)
    class Meta:
        verbose_name = "PhieuNhapKho"
        verbose_name_plural = "PhieuNhapKhos" 

class ChiTietPhieuNhapKho(models.Model):
    soluong = models.IntegerField(null = True)
    ngaynhapkho = models.DateField(null = True)
    phieunhapkho = models.ForeignKey(PhieuNhapKho, on_delete= models.DO_NOTHING)
    hanghoa = models.ForeignKey(HangHoa, on_delete= models.DO_NOTHING)
    class Meta:
        verbose_name = "ChiTietPhieuNhapKho"
        verbose_name_plural = "ChiTietPhieuNhapKhos" 

class PhieuXuatKho(models.Model):
    ngayxuatkho = models.DateField(null = True)
    tinhtranghang = models.CharField(max_length= 100)
    nhanviennh = models.IntegerField(null = True)
    nhanvienlp = models.IntegerField(null = True)
    nhanvienxn = models.IntegerField(null = True)
    nhanviengh = models.IntegerField(null = True)

    class Meta:
        verbose_name = "PhieuXuatKho"
        verbose_name_plural = "PhieuXuatKhos" 

class HoaDon(models.Model):
    ngaylaphd = models.DateField(null = True)
    ngaygiao = models.DateField(null = True)
    tongtien = models.FloatField(null = True)
    tiengiamtichxu = models.FloatField(null = True)
    nhanvien = models.ForeignKey(NhanVien, on_delete= models.DO_NOTHING)
    khachhang = models.ForeignKey(KhachHang, on_delete= models.DO_NOTHING)

    class Meta:
        verbose_name = "HoaDon"
        verbose_name_plural = "HoaDons" 

class ChiTietHoaDon(models.Model):
    soluong = models.IntegerField(null = True)
    giagiam = models.FloatField(null = True)
    dongia = models.FloatField(null = True)
    thanhtien = models.FloatField(null = True)
    giamgia = models.FloatField(null = True)
    hoadon =  models.ForeignKey(HoaDon, on_delete= models.DO_NOTHING)
    hanghoa = models.ForeignKey(HangHoa, on_delete= models.DO_NOTHING)

    class Meta:
        verbose_name = "ChiTietHoaDon"
        verbose_name_plural = "ChiTietHoaDons" 

class PhieuGiaoHang(models.Model):
    thoigiangiao = models.DateField(null = True)
    nhanviengh = models.IntegerField(null = True)
    nhanvienlp = models.IntegerField(null = True)
    khachhang = models.ForeignKey(KhachHang, on_delete= models.DO_NOTHING)
    hinhthuc = models.ForeignKey(HinhThucThanhToan, on_delete= models.DO_NOTHING)

    class Meta:
        verbose_name = "PhieuGiaoHang"
        verbose_name_plural = "PhieuGiaoHangs" 

class ViewNhanVien(models.Model):
    tennv = models.CharField(max_length = 50)
    diachinv = models.CharField(max_length = 50, null = True)
    sdtnv = models.CharField(max_length = 13, null = True)
    email = models.CharField(max_length = 100)
    gioitinh = models.IntegerField(null = True)
    cmnd = models.CharField(max_length = 15, null = True)
    chucvu_id = models.IntegerField(null = True)
    tencv = models.CharField(max_length = 50)

    class Meta:
        managed = False
        db_table = 'viewnhanvien'

class ViewHangHoa(models.Model):
    tenhang = models.CharField(max_length = 50)
    dongia  = models.FloatField(null = True)
    tinhtrang = models.IntegerField(null = True)
    mota = models.CharField(max_length = 200, null = True)
    soluong = models.IntegerField(null = True)
    hinhanh = models.CharField(max_length = 2000, null = True)
    loaihang_id = models.IntegerField(null = True)
    nhacungcap_id = models.IntegerField(null = True)
    tenloai = models.CharField(max_length = 100, null= True)
    ngaymoban = models.DateField(null = True)
    khuyenmai = models.ForeignKey(KhuyenMai, on_delete= models.DO_NOTHING, null = True, blank = True)
    class Meta:
        managed = False
        db_table = 'viewhanghoa'

class ViewKhuyenMai(models.Model):
    ngaybd = models.DateField(null = True)
    ngaykt = models.DateField(null = True)
    giagiam = models.FloatField(null = True)
    tenhang = models.CharField(max_length = 50)
    hinhanh = models.CharField(max_length = 100000)
    hanghoa_id = models.IntegerField(null = True)
    dongia = models.FloatField(null= True)
    
    class Meta:
        managed = False
        db_table = 'viewkhuyenmai'

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    def __str__(self):
        return self.file.name