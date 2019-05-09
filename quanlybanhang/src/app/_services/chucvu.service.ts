import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { ChucVu } from '../_models/chucvu';


@Injectable()
export class ChucVuService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/chucvus/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/chucvus/` + id + '/');
    }

    create(chucvu: ChucVu) {
        return this.http.post<any>(`${SERVER_API_URL}/chucvus/`,chucvu);
    }

    update(chucvu: ChucVu) {
        return this.http.put(`${SERVER_API_URL}/chucvus/` + chucvu.id + '/', chucvu ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/chucvus/` + id + '/');
    }
}