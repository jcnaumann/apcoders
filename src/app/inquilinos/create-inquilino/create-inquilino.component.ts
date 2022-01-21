import { Component, OnInit } from '@angular/core';
import { Inquilino } from '../inquilino';
import { InquilinoService } from '../inquilino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-inquilino',
  templateUrl: './create-inquilino.component.html',
  styleUrls: ['./create-inquilino.component.css']
})
export class CreateInquilinoComponent implements OnInit {

  inquilino: Inquilino = new Inquilino();

  constructor(private inquilinoService: InquilinoService, private router: Router) { }

  ngOnInit(): void { }

  saveInquilino(){
    this.inquilinoService.createInquilino(this.inquilino).subscribe( data => {
      console.log(data);
      this.goToInquilinoList();
    }, error => console.log(error));
  }

  goToInquilinoList(){
    this.router.navigate(['/inquilinos']);
  }

  onSubmit(){
    console.log(this.inquilino);
    this.saveInquilino();
  }

}
