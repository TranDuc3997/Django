import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaiHang } from "../_models/loaihang";

@Injectable()
export class LoaiHangService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/loaihangs/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/loaihangs/` + id + '/');
    }

    create(loaihang: LoaiHang) {
        return this.http.post<any>(`${SERVER_API_URL}/loaihangs/`,loaihang);
    }

    update(loaihang: LoaiHang) {
        return this.http.put(`${SERVER_API_URL}/loaihangs/` + loaihang.id + '/', loaihang ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/loaihangs/` + id + '/');
    }
}