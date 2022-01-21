import { Component, OnInit } from '@angular/core';
import { Despesa, TipoDespesa } from '../despesa';
import { DespesaService } from '../despesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-despesa',
  templateUrl: './create-despesa.component.html',
  styleUrls: ['./create-despesa.component.css']
})
/**
 * Classe que implementa a criação de itens de despesas.
 */
export class CreateDespesaComponent implements OnInit {

  //Objetos Despesa e TipoDespesa
  despesa: Despesa = new Despesa();
  tpDesp: TipoDespesa = new TipoDespesa();

  constructor(private despesaService: DespesaService, private router: Router) { }

  ngOnInit(): void { }

  /**
   * Método para o salvamento de despesas.
   */
  saveDespesa() {

    //Cria um objeto JSON para retorno ao backend Java, somente com as informações necessárias 
    //à criação de novas despesas.
    var desp = {
      "descricao": this.despesa.descricao,
      "tipoDespesa": {
        "descricao": this.tpDesp.descricao
      },
      "valor": this.despesa.valor,
      "vencimentoFatura": this.despesa.vencimentoFatura,
      "statusPagamento": this.despesa.statusPagamento
    };
    //Invocação do método createDespesa() disponível na classe de serviços.
    this.despesaService.createDespesa(desp).subscribe( data => {
      //console.log(data);
      this.goToDespesaList();
    }, error => console.log(error));
  }

  /**
   * Retorna à página Listagem de Despesas
   */
  goToDespesaList(){
    this.router.navigate(['/despesas']);
  }

  /**
   * Ação do botão Enviar da página, direcionando para o método saveDespesa();
   */
  onSubmit(){
    //console.log(this.despesa);
    this.saveDespesa();
  }

}
