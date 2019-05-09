import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KhachHang } from '../../../_models/khachang';
import { SERVER_API_URL } from '../../../app.constants';
import { Observable } from 'rxjs';



@Injectable()
export class KhachHangService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/khachhangs/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/khachhangs/` + id + '/');
    }

    create(khachhang: KhachHang) {
        return this.http.post<any>(`${SERVER_API_URL}/khachhangs/`,khachhang);
    }

    update(khachang: KhachHang) {
        return this.http.put(`${SERVER_API_URL}/khachhangs/` + khachang.id+ '/', khachang ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/khachhangs/` + id + '/');
    }
}