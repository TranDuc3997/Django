import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

import { AlertComponent } from "./_directives";
import { AuthGuard } from "./_guards";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import {
  AlertService,
  AuthenticationService,
  TichXuService
} from "./_services";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { NavbarComponent } from "./navbar/navbar.component";
import { KhachHangComponent } from "./home/quanlychung/khachhang/khachhang.component";
import { KhachHangService } from "./home/quanlychung/khachhang/khachhang.service";
import { KhachHangDeletePopupComponent } from "./home/quanlychung/khachhang/pop-up/delete/popup-khachhang-delete.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { KhachHangCreatePopupComponent } from "./home/quanlychung/khachhang/pop-up/create/popup-khachhang-create.component";
import { KhachHangUpdatePopupComponent } from "./home/quanlychung/khachhang/pop-up/update/popup-khachhang-update.component";
import { NhanVienService } from "./home/quanlychung/nhanvien/nhanvien.service";
import { ChucVuService } from "./_services/chucvu.service";
import { NhanVienComponent } from "./home/quanlychung/nhanvien/nhanvien.component";
import { NhanVienCreatePopupComponent } from "./home/quanlychung/nhanvien/pop-up/create/popup-nhanvien-create.component";
import { NhanVienDeletePopupComponent } from "./home/quanlychung/nhanvien/pop-up/delete/popup-nhanvien-delete.component";
import { NhanVienUpdatePopupComponent } from "./home/quanlychung/nhanvien/pop-up/update/popup-nhanvien-update.component";
import { NhaCungCapService } from "./_services/nhacungcap.service";
import { NhaCungCapComponent } from "./home/quanlychung/nhacungcap/nhacungcap.component";
import { NhaCungCapCreatePopupComponent } from "./home/quanlychung/nhacungcap/pop-up/create/popup-nhacungcap-create.component";
import { NhaCungCapDeletePopupComponent } from "./home/quanlychung/nhacungcap/pop-up/delete/popup-nhacungcap-delete.component";
import { NhaCungCapUpdatePopupComponent } from "./home/quanlychung/nhacungcap/pop-up/update/popup-nhacungcap-update.component";
import { HinhThucThanhToanService } from "./_services/hinhthucthanhtoan.service";
import { ChiTietPhieuNhapKhoService } from "./_services/chitietphieunhapkho.service";
import { ChiTietHoaDonService } from "./_services/chitiethoadon.service";
import { KhuyenMaiService } from "./_services/khuyenmai.service";
import { LoaiHangService } from "./_services/loaihang.service";
import { PhieuGiaoHangService } from "./_services/phieugiaohang.service";
import { PhieuNhapService } from "./_services/phieunhap.service";
import { PhieuNhapKhoService } from "./_services/phieunhapkho.service";
import { HangHoaComponent } from "./home/quanlychung/hanghoa/hanghoa.component";
import { HangHoaService } from "./_services/hanghoa.service";
import { ChucVuComponent } from "./home/quanlychung/chucvu/chucvu.component";
import { LoaiHangComponent } from "./home/quanlychung/loaihang/loaihang.component";
import { HangHoaCreatePopupComponent } from "./home/quanlychung/hanghoa/pop-up/create/popup-hanghoa-create.component";
import { HangHoaDeletePopupComponent } from "./home/quanlychung/hanghoa/pop-up/delete/popup-hanghoa-delete.component";
import { HangHoaUpdatePopupComponent } from "./home/quanlychung/hanghoa/pop-up/update/popup-hanghoa-update.component";
import { ChucVuCreatePopupComponent } from "./home/quanlychung/chucvu/pop-up/create/popup-chucvu-create.component";
import { ChucVuDeletePopupComponent } from "./home/quanlychung/chucvu/pop-up/delete/popup-chucvu-delete.component";
import { ChucVuUpdatePopupComponent } from "./home/quanlychung/chucvu/pop-up/update/popup-chucvu-update.component";
import { LoaiHangCreatePopupComponent } from "./home/quanlychung/loaihang/pop-up/create/popup-loaihang-create.component";
import { LoaiHangDeletePopupComponent } from "./home/quanlychung/loaihang/pop-up/delete/popup-loaihang-delete.component";
import { LoaiHangUpdatePopupComponent } from "./home/quanlychung/loaihang/pop-up/update/popup-loaihang-update.component";
import { PhieuGiaoHangComponent } from "./home/quanlybanhang/phieugiao/phieugiao.component";
import { PhieuGiaoHangCreatePopupComponent } from "./home/quanlybanhang/phieugiao/pop-up/create/popup-phieugiao-create.component";
import { PhieuGiaoHangDeletePopupComponent } from "./home/quanlybanhang/phieugiao/pop-up/delete/popup-phieugiao-delete.component";
import { PhieuGiaoHangUpdatePopupComponent } from "./home/quanlybanhang/phieugiao/pop-up/update/popup-phieugiao-update.component";
import { TichXuComponent } from "./home/quanlybanhang/tichxu/tichxu.component";
import { TichXuCreatePopupComponent } from "./home/quanlybanhang/tichxu/pop-up/create/popup-tichxu-create.component";
import { TichXuDeletePopupComponent } from "./home/quanlybanhang/tichxu/pop-up/delete/popup-tichxu-delete.component";
import { TichXuUpdatePopupComponent } from "./home/quanlybanhang/tichxu/pop-up/update/popup-tichxu-update.component";
import { KhuyenMaiComponent } from "./home/quanlybanhang/khuyenmai/khuyenmai.component";
import { KhuyenMaiCreatePopupComponent } from "./home/quanlybanhang/khuyenmai/pop-up/create/popup-khuyenmai-create.component";
import { KhuyenMaiDeletePopupComponent } from "./home/quanlybanhang/khuyenmai/pop-up/delete/popup-khuyenmai-delete.component";
import { KhuyenMaiUpdatePopupComponent } from "./home/quanlybanhang/khuyenmai/pop-up/update/popup-khuyenmai-update.component";
import { FileService } from "./_services/file.service";
@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    KhachHangComponent,
    KhachHangDeletePopupComponent,
    KhachHangCreatePopupComponent,
    KhachHangUpdatePopupComponent,
    NhanVienComponent,
    NhanVienCreatePopupComponent,
    NhanVienDeletePopupComponent,
    NhanVienUpdatePopupComponent,
    NhaCungCapComponent,
    NhaCungCapCreatePopupComponent,
    NhaCungCapDeletePopupComponent,
    NhaCungCapUpdatePopupComponent,
    HangHoaComponent,
    HangHoaCreatePopupComponent,
    HangHoaDeletePopupComponent,
    HangHoaUpdatePopupComponent,
    ChucVuComponent,
    ChucVuCreatePopupComponent,
    ChucVuDeletePopupComponent,
    ChucVuUpdatePopupComponent,
    LoaiHangComponent,
    LoaiHangCreatePopupComponent,
    LoaiHangDeletePopupComponent,
    LoaiHangUpdatePopupComponent,
    PhieuGiaoHangComponent,
    PhieuGiaoHangCreatePopupComponent,
    PhieuGiaoHangDeletePopupComponent,
    PhieuGiaoHangUpdatePopupComponent,
    TichXuComponent,
    TichXuCreatePopupComponent,
    TichXuDeletePopupComponent,
    TichXuUpdatePopupComponent,
    KhuyenMaiComponent,
    KhuyenMaiCreatePopupComponent,
    KhuyenMaiDeletePopupComponent,
    KhuyenMaiUpdatePopupComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    KhachHangService,
    TichXuService,
    NhanVienService,
    ChucVuService,
    NhaCungCapService,
    ChiTietHoaDonService,
    ChiTietPhieuNhapKhoService,
    ChiTietHoaDonService,
    HinhThucThanhToanService,
    KhuyenMaiService,
    LoaiHangService,
    PhieuGiaoHangService,
    PhieuNhapService,
    PhieuNhapKhoService,
    HangHoaService,
    FileService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  entryComponents: [
    KhachHangDeletePopupComponent,
    KhachHangCreatePopupComponent,
    KhachHangUpdatePopupComponent,
    NhanVienCreatePopupComponent,
    NhanVienDeletePopupComponent,
    NhanVienUpdatePopupComponent,
    NhaCungCapCreatePopupComponent,
    NhaCungCapDeletePopupComponent,
    NhaCungCapUpdatePopupComponent,
    HangHoaCreatePopupComponent,
    HangHoaDeletePopupComponent,
    HangHoaUpdatePopupComponent,
    ChucVuCreatePopupComponent,
    ChucVuDeletePopupComponent,
    ChucVuUpdatePopupComponent,
    LoaiHangCreatePopupComponent,
    LoaiHangDeletePopupComponent,
    LoaiHangUpdatePopupComponent,
    TichXuCreatePopupComponent,
    TichXuDeletePopupComponent,
    TichXuUpdatePopupComponent,
    KhuyenMaiCreatePopupComponent,
    KhuyenMaiDeletePopupComponent,
    KhuyenMaiUpdatePopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
