import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Unidade } from './unidade';

@Injectable({
    providedIn: 'root'
})
export class UnidadeService {

    private baseURL = "http://localhost:8881/und";

    constructor(private httpClient: HttpClient) { }

    getUnidadesList(): Observable<Unidade[]>{
        return this.httpClient.get<Unidade[]>(`${this.baseURL}`);
    }

    createUnidade(any: any): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, any);
    }

    getUnidadeById(id: number): Observable<Unidade>{
        return this.httpClient.get<Unidade>(`${this.baseURL}/${id}`);
    }

    updateUnidade(unidade: Unidade): Observable<Object>{
        return this.httpClient.put(`${this.baseURL}`, unidade);
    }

    deleteUnidade(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

}