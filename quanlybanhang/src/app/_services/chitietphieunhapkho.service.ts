import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChiTietPhieuNhapKho } from "../_models/chitietphieunhapkho";

@Injectable()
export class ChiTietPhieuNhapKhoService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/chitietphieunhapkhos/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/chitietphieunhapkhos/` + id + '/');
    }

    create(chitietphieunhapkho: ChiTietPhieuNhapKho) {
        return this.http.post<any>(`${SERVER_API_URL}/chitietphieunhapkhos/`,chitietphieunhapkho);
    }

    update(chitietphieunhapkho: ChiTietPhieuNhapKho) {
        return this.http.put(`${SERVER_API_URL}/chitietphieunhapkhos/` + chitietphieunhapkho.id + '/', chitietphieunhapkho ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/chitietphieunhapkhos/` + id + '/');
    }
}