import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChiTietHoaDon } from "../_models/chitiethoadon";

@Injectable()
export class ChiTietHoaDonService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/chitiethoadons/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/chitiethoadons/` + id + '/');
    }

    create(chitiethoadon: ChiTietHoaDon) {
        return this.http.post<any>(`${SERVER_API_URL}/chitiethoadons/`,chitiethoadon);
    }

    update(chitiethoadon: ChiTietHoaDon) {
        return this.http.put(`${SERVER_API_URL}/chitiethoadons/` + chitiethoadon.id + '/', chitiethoadon ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/chitiethoadons/` + id + '/');
    }
}