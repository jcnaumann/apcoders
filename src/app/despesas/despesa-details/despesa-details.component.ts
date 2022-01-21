import { Component, OnInit } from '@angular/core';
import { Despesa } from '../despesa';
import { ActivatedRoute } from '@angular/router';
import { DespesaService } from '../despesa.service';

@Component({
  selector: 'app-despesa-details',
  templateUrl: './despesa-details.component.html',
  styleUrls: ['./despesa-details.component.css']
})
/**
 * Classe que implementa a apresentação dos detalhes do item em tela 
 */
export class DespesaDetailsComponent implements OnInit {

  id!: number;
  despesa!: Despesa;

  constructor(private route: ActivatedRoute, private despesaService: DespesaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // Cria o obj despesa e o utiliza para instanciar seus campos.
    this.despesa = new Despesa();
    // Invoca o serviço para buscar na base de dados a despesa pelo seu id.
    this.despesaService.getDespesaById(this.id).subscribe( data => {
      this.despesa = data;
    });
  }

}
