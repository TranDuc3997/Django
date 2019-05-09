import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PhieuNhap } from "../_models/phieunhap";

@Injectable()
export class PhieuNhapService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/phieunhaps/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/phieunhaps/` + id + '/');
    }

    create(phieunhap: PhieuNhap) {
        return this.http.post<any>(`${SERVER_API_URL}/phieunhaps/`,phieunhap);
    }

    update(phieunhap: PhieuNhap) {
        return this.http.put(`${SERVER_API_URL}/phieunhaps/` + phieunhap.id + '/', phieunhap ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/phieunhaps/` + id + '/');
    }
}