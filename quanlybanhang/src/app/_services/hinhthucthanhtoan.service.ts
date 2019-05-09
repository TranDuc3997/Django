import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { HinhThucThanhToan } from '../_models/hinhthucthanhtoan';


@Injectable()
export class HinhThucThanhToanService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/HinhThucThanhToans/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/hinhthucthanhtoans/` + id + '/');
    }

    create(hinhthucthanhtoan: HinhThucThanhToan) {
        return this.http.post<any>(`${SERVER_API_URL}/hinhthucthanhtoans/`,hinhthucthanhtoan);
    }

    update(hinhthucthanhtoan: HinhThucThanhToan) {
        return this.http.put(`${SERVER_API_URL}/hinhthucthanhtoans/` + hinhthucthanhtoan.id + '/', hinhthucthanhtoan ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/hinhthucthanhtoans/` + id + '/');
    }
}