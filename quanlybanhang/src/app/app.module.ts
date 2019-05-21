import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, TichXuService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NavbarComponent } from './navbar/navbar.component';
import { KhachHangComponent } from './home/quanlychung/khachhang/khachhang.component';
import { KhachHangService } from './home/quanlychung/khachhang/khachhang.service';
import { KhachHangDeletePopupComponent } from './home/quanlychung/khachhang/pop-up/delete/popup-khachhang-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KhachHangCreatePopupComponent } from './home/quanlychung/khachhang/pop-up/create/popup-khachhang-create.component';
import { KhachHangUpdatePopupComponent } from './home/quanlychung/khachhang/pop-up/update/popup-khachhang-update.component';
import { NhanVienService } from './home/quanlychung/nhanvien/nhanvien.service';
import { ChucVuService } from './_services/chucvu.service';
import { NhanVienComponent } from './home/quanlychung/nhanvien/nhanvien.component';
import { NhanVienCreatePopupComponent } from './home/quanlychung/nhanvien/pop-up/create/popup-nhanvien-create.component';
import { NhanVienDeletePopupComponent } from './home/quanlychung/nhanvien/pop-up/delete/popup-nhanvien-delete.component';
import { NhanVienUpdatePopupComponent } from './home/quanlychung/nhanvien/pop-up/update/popup-nhanvien-update.component';
import { NhaCungCapService } from './_services/nhacungcap.service';
import { NhaCungCapComponent } from './home/quanlychung/nhacungcap/nhacungcap.component';
import { NhaCungCapCreatePopupComponent } from './home/quanlychung/nhacungcap/pop-up/create/popup-nhacungcap-create.component';
import { NhaCungCapDeletePopupComponent } from './home/quanlychung/nhacungcap/pop-up/delete/popup-nhacungcap-delete.component';
import { NhaCungCapUpdatePopupComponent } from './home/quanlychung/nhacungcap/pop-up/update/popup-nhacungcap-update.component';
import { HinhThucThanhToanService } from './_services/hinhthucthanhtoan.service';
import { ChiTietPhieuNhapKhoService } from './_services/chitietphieunhapkho.service';
import { ChiTietHoaDonService } from './_services/chitiethoadon.service';
import { KhuyenMaiService } from './_services/khuyenmai.service';
import { LoaiHangService } from './_services/loaihang.service';
import { PhieuGiaoHangService } from './_services/phieugiaohang.service';
import { PhieuNhapService } from './_services/phieunhap.service';
import { PhieuNhapKhoService } from './_services/phieunhapkho.service';
import { HangHoaComponent } from './home/quanlychung/hanghoa/hanghoa.component';
import { HangHoaService } from './_services/hanghoa.service';
import { ChucVuComponent } from './home/quanlychung/chucvu/chucvu.component';
import { LoaiHangComponent } from './home/quanlychung/loaihang/loaihang.component';
import { HangHoaCreatePopupComponent } from './home/quanlychung/hanghoa/pop-up/create/popup-hanghoa-create.component';
import { HangHoaDeletePopupComponent } from './home/quanlychung/hanghoa/pop-up/delete/popup-hanghoa-delete.component';
import { HangHoaUpdatePopupComponent } from './home/quanlychung/hanghoa/pop-up/update/popup-hanghoa-update.component';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        routing,
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
        LoaiHangComponent    
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
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

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
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }