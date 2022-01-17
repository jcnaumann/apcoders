import { Component, OnInit } from '@angular/core';
import { InquilinoService } from '../inquilino.service';
import { Inquilino } from '../inquilino';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-inquilino',
  templateUrl: './update-inquilino.component.html',
  styleUrls: ['./update-inquilino.component.css']
})
export class UpdateInquilinoComponent implements OnInit {

  id!: number;
  inquilino: Inquilino = new Inquilino();

  constructor(private inquilinoService: InquilinoService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.inquilinoService.getInquilinoById(this.id).subscribe(data => {
      this.inquilino = data; 
    }, error => console.log(error));
  }

  onSubmit(){
    this.inquilinoService.updateInquilino(this.inquilino).subscribe( data => {
      this.goToInquilinoList();
    }, error => console.log(error));
  }

  goToInquilinoList(){
    this.router.navigate(['/inquilinos']);
  }

}
