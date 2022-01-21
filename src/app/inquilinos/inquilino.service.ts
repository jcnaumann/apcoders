import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Inquilino } from './inquilino';

@Injectable({
    providedIn: 'root'
})
export class InquilinoService {

    private baseURL = "http://localhost:8881/inq";

    constructor(private httpClient: HttpClient) { }

    getInquilinosList(): Observable<Inquilino[]>{
        return this.httpClient.get<Inquilino[]>(`${this.baseURL}`);
    }

    createInquilino(inquilino: Inquilino): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, inquilino);
    }

    getInquilinoById(id: number): Observable<Inquilino>{
        return this.httpClient.get<Inquilino>(`${this.baseURL}/${id}`);
    }

    updateInquilino(inquilino: Inquilino): Observable<Object>{
        return this.httpClient.put(`${this.baseURL}`, inquilino);
    }

    deleteInquilino(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

}