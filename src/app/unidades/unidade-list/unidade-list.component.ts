import { Component, OnInit } from '@angular/core';
import { Unidade } from '../unidade'
import { UnidadeService } from '../unidade.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.css']
})
/**
 * Classe que implementa a apresentação da lista de unidades em tela 
 */
export class UnidadeListComponent implements OnInit {

  unidades!: Unidade[];

  constructor(private unidadeService: UnidadeService, private router: Router) { }

  ngOnInit(): void {
    this.getUnidades();
  }

  /**
   * Pega no backend Java a listagem de unidades existentes na tabela da base de dados.
   */
  private getUnidades(){
    this.unidadeService.getUnidadesList().subscribe(data => {
      /*console.log(data);*/
      this.unidades = data;
    });
  }

  /**
   * Representa o acesso a caminho de detalhes.
   * @param id Id da unidade que será detalhada
   */
  unidadeDetails(id: number){
    this.router.navigate(['unidade-details', id]);
  }

  /**
   * Representa o caminho a pagina de edição das unidade.
   * @param id 
   */
  updateUnidade(id: number){
    this.router.navigate(['update-unidade', id]);
  }

  /**
   * Representa o caminho a pagina de exclusão de registros/unidade.
   * @param id 
   */
  deleteUnidade(id: number){
    this.unidadeService.deleteUnidade(id).subscribe( data => {
      /*console.log(data);*/
      this.getUnidades();
      this.reloadCurrentPage();
    })
  }

  /**
   * Método que invoca a atualização da tela.
   */
  reloadCurrentPage() {
    window.location.reload();
  }

}
