import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PhieuGiaoHang } from "../_models/phieugiaohang";

@Injectable()
export class PhieuGiaoHangService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/phieugiaohangs/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/phieugiaohangs/` + id + '/');
    }

    create(phieugiaohang: PhieuGiaoHang) {
        return this.http.post<any>(`${SERVER_API_URL}/phieugiaohangs/`,phieugiaohang);
    }

    update(phieugiaohang: PhieuGiaoHang) {
        return this.http.put(`${SERVER_API_URL}/phieugiaohangs/` + phieugiaohang.id + '/', phieugiaohang ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/phieugiaohangs/` + id + '/');
    }
}