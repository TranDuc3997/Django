import { SERVER_API_URL } from "../app.constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HangHoa } from "../_models/hanghoa";

@Injectable()
export class HangHoaService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/hanghoas/`);
    }
    getList() :Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/hanghoa/list`)
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/hanghoas/` + id + '/');
    }

    create(hanghoa: HangHoa) {
        return this.http.post<any>(`${SERVER_API_URL}/hanghoas/`,hanghoa);
    }

    update(hanghoa: HangHoa) {
        return this.http.put(`${SERVER_API_URL}/hanghoas/` + hanghoa.id + '/', hanghoa ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/hanghoas/` + id + '/');
    }
}