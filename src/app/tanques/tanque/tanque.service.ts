import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tanque } from './tanque';

const API = 'http://localhost:59773';

@Injectable({providedIn: 'root'})
export class TanqueService{

    constructor(private http: HttpClient) { }

    getAll(): Observable<Tanque[]> {
        return this.http.get<Tanque[]>(API + '/api/tanques');
    }
}
