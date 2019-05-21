from django.conf.urls import url
from django.urls import path
from rest_framework import routers
from project.quanlybanhang.views import *
from rest_framework.urlpatterns import format_suffix_patterns
from project.quanlybanhang import views
from django.conf import settings
from django.conf.urls.static import static
router = routers.DefaultRouter()

# router default 
router.register(r'loaihangs', LoaiHangViewSet)
router.register(r'hanghoas', HangHoaViewSet)
router.register(r'tichxus', TichXuViewSet)
router.register(r'khachhangs', KhachHangViewSet)
router.register(r'chucvus', ChucVuViewSet)
router.register(r'nhanviens', NhanVienViewSet)
router.register(r'hinhthucthanhtoans', HinhThucThanhToanViewSet)
router.register(r'khuyenmais', KhuyenMaiViewSet)
router.register(r'nhacungcaps', NhaCungCapViewSet)
router.register(r'phieunhaps', PhieuNhapViewSet)
router.register(r'chitietphieunhaps', ChiTietPhieuNhapViewSet)
router.register(r'phieunhapkhos', PhieuNhapKhoViewSet)
router.register(r'chitietphieunhapkhos', ChiTietPhieuNhapKhoViewSet)
router.register(r'phieuxuatkhos', PhieuXuatKhoViewSet)
router.register(r'hoadons', HoaDonViewSet)
router.register(r'chitiethoadons', ChiTietHoaDonViewSet)
router.register(r'phieugiaohangs', PhieuGiaoHangViewSet)

urlpatterns = [
    url(r'admin/login', LoginView.as_view()),
    url(r'nhanvien/list', DetailNhanVien.as_view()),
    url(r'hanghoa/list', DetailHangHoa.as_view()),
    url(r'khuyenmai/list', DetailKhuyenMai.as_view()),
    url(r'upload/', FileUploadView.as_view()),
    url(r'sanpham/list', CustomListSanPham.as_view()),
]
 
urlpatterns += router.urls
if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 