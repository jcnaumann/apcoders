import { Component, OnInit } from '@angular/core';
import { Unidade } from '../unidade';
import { ActivatedRoute } from '@angular/router';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'app-unidade-details',
  templateUrl: './unidade-details.component.html',
  styleUrls: ['./unidade-details.component.css']
})
/**
 * Classe que implementa a apresentação dos detalhes do item em tela 
 */
export class UnidadeDetailsComponent implements OnInit {

  id!: number;
  unidade!: Unidade;

  constructor(private route: ActivatedRoute, private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // Cria o obj unidade e o utiliza para instanciar seus campos.
    this.unidade = new Unidade();
    // Invoca o serviço para buscar na base de dados a unidade pelo seu id.
    this.unidadeService.getUnidadeById(this.id).subscribe( data => {
      this.unidade = data;
    });
  }

}
