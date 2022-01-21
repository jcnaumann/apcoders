import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Despesa } from './despesa';

@Injectable({
    providedIn: 'root'
})
/**
 * Classe de serviços para o tipo Despesa
 */
export class DespesaService {

    private baseURL = "http://localhost:8881/desp";

    constructor(private httpClient: HttpClient) { }

    /**
     * Retorna uma matriz com todos os registro tipo Despesa
     * @returns Retorna uma matriz com todos os registro tipo Despesa
     */
    getDespesasList(): Observable<Despesa[]> {
        return this.httpClient.get<Despesa[]>(`${this.baseURL}`);
    }

    /**
     * Método para o registro/criação de novas despesas na base de dados
     * @param any Objeto tipo JSON - Tipo Despesa
     * @returns Post acompanhado de um objeto 
     */
    createDespesa(any: any): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, any);
    }

    /**
     * Obtém uma Despesa a partir do seu Id.
     * @param id Id a ser pesquisado
     * @returns retorna o objeto recebido do beckend
     */
    getDespesaById(id: number): Observable<Despesa> {
        return this.httpClient.get<Despesa>(`${this.baseURL}/${id}`);
    }

    /**
     * Remessa do objeto para atualização na base
     * @param despesa Objeto remessa
     * @returns Objeto remessa para atualização
     */
    updateDespesa(despesa: Despesa): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}`, despesa);
    }

    /**
     * Remete um Id para exclusão na base.
     * @param id Id remetido para deleção
     * @returns Retorna o Id para deleção
     */
    deleteDespesa(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

}