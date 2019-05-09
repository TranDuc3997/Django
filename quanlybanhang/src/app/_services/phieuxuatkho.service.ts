import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PhieuXuatKho } from "../_models/phieuxuatkho";

@Injectable()
export class PhieuXuatKhoService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/phieuxuatkhos/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/phieuxuatkhos/` + id + '/');
    }

    create(phieuxuatkho: PhieuXuatKho) {
        return this.http.post<any>(`${SERVER_API_URL}/phieuxuatkhos/`,phieuxuatkho);
    }

    update(phieuxuatkho: PhieuXuatKho) {
        return this.http.put(`${SERVER_API_URL}/phieuxuatkhos/` + phieuxuatkho.id + '/', phieuxuatkho ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/phieuxuatkhos/` + id + '/');
    }
}