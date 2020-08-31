import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tanque } from '../tanque/tanque';
import { Observable } from 'rxjs';

const API = 'http://localhost:59773';

@Injectable({
    providedIn: 'root'
})
export class TanqueFormService {

    constructor(private http: HttpClient) { }

    gravar(deposito: string, capacidade: string, tipoDeProduto: string): Observable<Tanque> {
        return this.http.post<Tanque>(API + '/api/tanques', { deposito, capacidade, tipoDeProduto } );
    }

    alterar(deposito: string, capacidade: string, tipoDeProduto: string): Observable<Tanque> {
        return this.http.put<Tanque>(API + '/api/tanques', { deposito, capacidade, tipoDeProduto } );
    }

    verificaDepositoNaoExiste(deposito: string): Observable<Tanque> {
        return this.http.get<Tanque>(API + '/api/tanques/' + deposito);
    }

    getDepositoById(deposito: string): Observable<Tanque> {
        return this.http.get<Tanque>(API + '/api/tanques/' + deposito);
    }

    removeTanque(deposito: string): Observable<Tanque> {
        return this.http.delete<Tanque>(API + '/api/tanques/' + deposito);
    }
}
