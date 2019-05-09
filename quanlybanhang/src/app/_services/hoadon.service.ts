import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HoaDon } from "../_models/hoadon";

@Injectable()
export class HoaDonService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/hoadons/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/hoadons/` + id + '/');
    }

    create(hoadon: HoaDon) {
        return this.http.post<any>(`${SERVER_API_URL}/hoadons/`,hoadon);
    }

    update(hoadon: HoaDon) {
        return this.http.put(`${SERVER_API_URL}/hoadons/` + hoadon.id + '/', hoadon ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/hoadons/` + id + '/');
    }
}