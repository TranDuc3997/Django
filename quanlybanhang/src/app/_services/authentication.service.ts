import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    // hide nava-bar if not yet login
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        if(localStorage.getItem('currentUser')){
            this.loggedIn.next(true);
        } else {
            this.loggedIn.next(false)
        }
        return this.loggedIn.asObservable();
    }
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        this.loggedIn.next(true);
        return this.http.post<any>(
            `${SERVER_API_URL}/admin/login`, 
            { 
                username, 
                password
            });

    }

    logout() {
        this.loggedIn.next(false)
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}