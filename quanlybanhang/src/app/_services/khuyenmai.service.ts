import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KhuyenMai } from "../_models/khuyenmai";

@Injectable()
export class KhuyenMaiService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/khuyenmais/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/khuyenmais/` + id + '/');
    }

    create(khuyenmai: KhuyenMai) {
        return this.http.post<any>(`${SERVER_API_URL}/khuyenmais/`,khuyenmai);
    }

    update(khuyenmai: KhuyenMai) {
        return this.http.put(`${SERVER_API_URL}/khuyenmais/` + khuyenmai.id + '/', khuyenmai ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/khuyenmais/` + id + '/');
    }
}