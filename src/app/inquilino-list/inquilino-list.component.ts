import { Component, OnInit } from '@angular/core';
import { Inquilino } from '../inquilino'
import { InquilinoService } from '../inquilino.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquilino-list',
  templateUrl: './inquilino-list.component.html',
  styleUrls: ['./inquilino-list.component.css']
})
export class InquilinoListComponent implements OnInit {

  inquilinos!: Inquilino[];

  constructor(private inquilinoService: InquilinoService, private router: Router) { }

  ngOnInit(): void {
    this.getInquilinos();
  }

  private getInquilinos(){
    this.inquilinoService.getInquilinosList().subscribe(data => {
      this.inquilinos = data;
    });
  }

  inquilinoDetails(id: number){
    this.router.navigate(['inquilino-details', id]);
  }

  updateInquilino(id: number){
    this.router.navigate(['update-inquilino', id]);
  }

  deleteInquilino(id: number){
    this.inquilinoService.deleteInquilino(id).subscribe( data => {
      console.log(data);
      this.getInquilinos();
      window.location.reload();
    })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
