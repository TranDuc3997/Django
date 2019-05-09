import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { NhaCungCap } from '../_models/nhacungcap';


@Injectable()
export class NhaCungCapService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/nhacungcaps/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/nhacungcaps/` + id + '/');
    }

    create(nhacungcap: NhaCungCap) {
        return this.http.post<any>(`${SERVER_API_URL}/nhacungcaps/`,nhacungcap);
    }

    update(nhacungcap: NhaCungCap) {
        return this.http.put(`${SERVER_API_URL}/nhacungcaps/` + nhacungcap.id + '/', nhacungcap ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/nhacungcaps/` + id + '/');
    }
}