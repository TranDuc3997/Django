import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { KhachHangComponent } from './home/quanlychung/khachhang/khachhang.component';
import { NhanVienComponent } from './home/quanlychung/nhanvien/nhanvien.component';
import { NhaCungCapComponent } from './home/quanlychung/nhacungcap/nhacungcap.component';
import { HangHoaComponent } from './home/quanlychung/hanghoa/hanghoa.component';
import { LoaiHangComponent } from './home/quanlychung/loaihang/loaihang.component';
import { ChucVuComponent } from './home/quanlychung/chucvu/chucvu.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'khachhang', 
        component: KhachHangComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'nhanvien', 
        component: NhanVienComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'nhacungcap', 
        component: NhaCungCapComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'chucvu', 
        component: ChucVuComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'hanghoa', 
        component: HangHoaComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'loaihang', 
        component: LoaiHangComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);