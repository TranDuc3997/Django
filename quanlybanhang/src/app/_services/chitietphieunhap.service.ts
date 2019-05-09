import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChiTietPhieuNhap } from "../_models/chitietphieunhap";

@Injectable()
export class ChiTietPhieuNhapService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/chitietphieunhaps/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/chitietphieunhaps/` + id + '/');
    }

    create(chitietphieunhap: ChiTietPhieuNhap) {
        return this.http.post<any>(`${SERVER_API_URL}/chitietphieunhaps/`,chitietphieunhap);
    }

    update(chitietphieunhap: ChiTietPhieuNhap) {
        return this.http.put(`${SERVER_API_URL}/chitietphieunhaps/` + chitietphieunhap.id + '/', chitietphieunhap ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/chitietphieunhaps/` + id + '/');
    }
}