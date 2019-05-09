import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PhieuNhapKho } from "../_models/phieunhapkho";

@Injectable()
export class PhieuNhapKhoService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/phieunhapkhos/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/phieunhapkhos/` + id + '/');
    }

    create(phieunhapkho: PhieuNhapKho) {
        return this.http.post<any>(`${SERVER_API_URL}/phieunhapkhos/`,phieunhapkho);
    }

    update(phieunhapkho: PhieuNhapKho) {
        return this.http.put(`${SERVER_API_URL}/phieunhapkhos/` + phieunhapkho.id + '/', phieunhapkho ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/phieunhapkhos/` + id + '/');
    }
}