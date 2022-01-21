import { Component, OnInit } from '@angular/core';
import { DespesaService } from '../despesa.service';
import { Despesa, TipoDespesa } from '../despesa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-despesa',
  templateUrl: './update-despesa.component.html',
  styleUrls: ['./update-despesa.component.css']
})
export class UpdateDespesaComponent implements OnInit {

  id!: number;
  despesa: Despesa = new Despesa();
  tpDesp: TipoDespesa = new TipoDespesa();

  constructor(private despesaService: DespesaService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.despesaService.getDespesaById(this.id).subscribe(data => {
      this.despesa = data; 
      this.tpDesp = data.tipoDespesa;
    }, error => console.log(error));
  }

  onSubmit(){
    this.despesaService.updateDespesa(this.despesa).subscribe( data => {
      this.goToDespesaList();
    }, error => console.log(error));
  }

  goToDespesaList(){
    this.router.navigate(['/despesas']);
  }

}
