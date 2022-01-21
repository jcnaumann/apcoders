import { Component, OnInit } from '@angular/core';
import { Unidade, Endereco } from '../unidade';
import { UnidadeService } from '../unidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-unidade',
  templateUrl: './create-unidade.component.html',
  styleUrls: ['./create-unidade.component.css']
})
/**
 * Classe que implementa a criação de itens de unidades.
 */
export class CreateUnidadeComponent implements OnInit {

  //Objetos Unidade e TipoUnidade
  unidade: Unidade = new Unidade();
  endereco: Endereco = new Endereco();

  constructor(private unidadeService: UnidadeService, private router: Router) { }

  ngOnInit(): void { }

  /**
   * Método para o salvamento de unidades.
   */
  saveUnidade() {

    //Cria um objeto JSON para retorno ao backend Java, somente com as informações necessárias 
    //à criação de novas unidades.
    var und = {
      "identificacao": this.unidade.identificacao,
      "proprietario": this.unidade.proprietario,
      "condominio": this.unidade.condominio,
      "endereco": {
        "endereco": this.endereco.endereco,
        "complemento": this.endereco.complemento,
        "bairro": this.endereco.bairro,
        "cidade": this.endereco.cidade,
        "estado": this.endereco.estado,
        "cep": this.endereco.cep
      }
    };
    //Invocação do método createUnidade() disponível na classe de serviços.
    this.unidadeService.createUnidade(und).subscribe( data => {
      //console.log(data);
      this.goToUnidadeList();
    }, error => console.log(error));
  }

  /**
   * Retorna à página Listagem de Unidades
   */
  goToUnidadeList(){
    this.router.navigate(['/unidades']);
  }

  /**
   * Ação do botão Enviar da página, direcionando para o método saveUnidade();
   */
  onSubmit(){
    //console.log(this.unidade);
    this.saveUnidade();
  }

}
