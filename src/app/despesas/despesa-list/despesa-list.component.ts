import { Component, OnInit } from '@angular/core';
import { Despesa } from '../despesa'
import { DespesaService } from '../despesa.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesa-list',
  templateUrl: './despesa-list.component.html',
  styleUrls: ['./despesa-list.component.css']
})
/**
 * Classe que implementa a apresentação da lista de despesas em tela 
 */
export class DespesaListComponent implements OnInit {

  despesas!: Despesa[];

  constructor(private despesaService: DespesaService, private router: Router) { }

  ngOnInit(): void {
    this.getDespesas();
  }

  /**
   * Pega no backend Java a listagem de despesas existentes na tabela da base de dados.
   */
  private getDespesas(){
    this.despesaService.getDespesasList().subscribe(data => {
      /*console.log(data);*/
      this.despesas = data;
    });
  }

  /**
   * Representa o acesso a caminho de detalhes.
   * @param id Id da despesa que será detalhada
   */
  despesasDetails(id: number){
    this.router.navigate(['despesa-details', id]);
  }

  /**
   * Representa o caminho a pagina de edição das despesas.
   * @param id 
   */
  updateDespesa(id: number){
    this.router.navigate(['update-despesa', id]);
  }

  /**
   * Representa o caminho a pagina de exclusão de registros/despesas.
   * @param id 
   */
  deleteDespesa(id: number){
    this.despesaService.deleteDespesa(id).subscribe( data => {
      /*console.log(data);*/
      this.getDespesas();
      window.location.reload();
    })
  }

  /**
   * Método que invoca a atualização da tela.
   */
  reloadCurrentPage() {
    window.location.reload();
  }

}
