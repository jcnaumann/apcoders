import { Component, OnInit } from '@angular/core';
import { Inquilino } from '../inquilino';
import { ActivatedRoute } from '@angular/router';
import { InquilinoService } from '../inquilino.service';

@Component({
  selector: 'app-inquilino-details',
  templateUrl: './inquilino-details.component.html',
  styleUrls: ['./inquilino-details.component.css']
})
export class InquilinoDetailsComponent implements OnInit {

  id!: number;
  inquilino!: Inquilino;

  constructor(private route: ActivatedRoute, private inquilinoService: InquilinoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.inquilino = new Inquilino();
    this.inquilinoService.getInquilinoById(this.id).subscribe( data => {
      this.inquilino = data;
    });
  }

}
