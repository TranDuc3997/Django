import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../../../app.constants';
import { Observable } from 'rxjs';
import { NhanVien } from '../../../_models/nhanvien';



@Injectable()
export class NhanVienService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/nhanviens/`);
    }
    getList() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/nhanvien/list`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/nhanviens/` + id + '/');
    }

    create(nhanvien: NhanVien) {
        return this.http.post<any>(`${SERVER_API_URL}/nhanviens/`,nhanvien);
    }

    update(nhanvien: NhanVien) {
        return this.http.put(`${SERVER_API_URL}/nhanviens/` + nhanvien.id+ '/', nhanvien ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/nhanviens/` + id + '/');
    }
}