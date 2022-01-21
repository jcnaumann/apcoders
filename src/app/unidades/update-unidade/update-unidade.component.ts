import { Component, OnInit } from '@angular/core';
import { UnidadeService } from '../unidade.service';
import { Unidade, Endereco } from '../unidade';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-unidade',
  templateUrl: './update-unidade.component.html',
  styleUrls: ['./update-unidade.component.css']
})
export class UpdateUnidadeComponent implements OnInit {

  id!: number;
  unidade: Unidade = new Unidade();
  endereco: Endereco = new Endereco();

  constructor(private unidadeService: UnidadeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.unidadeService.getUnidadeById(this.id).subscribe(data => {
      this.unidade = data; 
      this.endereco = data.endereco;
    }, error => console.log(error));
  }

  onSubmit(){
    this.unidadeService.updateUnidade(this.unidade).subscribe( data => {
      this.goToUnidadeList();
    }, error => console.log(error));
  }

  goToUnidadeList(){
    this.router.navigate(['/unidades']);
  }

}
