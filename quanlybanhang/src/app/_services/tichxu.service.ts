import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TichXu } from '../_models/tichxu';
import { SERVER_API_URL } from '../app.constants';



@Injectable()
export class TichXuService {
    constructor
    (private http: HttpClient){ }

    getAll() : Observable<any>{
        return this.http.get<any>(`${SERVER_API_URL}/tichxus/`);
    }
    getById(id: number) {
        return this.http.get(`${SERVER_API_URL}/tichxus/` + id + '/');
    }

    create(tichxu: TichXu) {
        return this.http.post<any>(`${SERVER_API_URL}/tichxus/`,tichxu);
    }

    update(tichxu: TichXu) {
        return this.http.put(`${SERVER_API_URL}/tichxus/` + tichxu.id + '/', tichxu ) ;
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_API_URL}/tichxus/` + id + '/');
    }
}