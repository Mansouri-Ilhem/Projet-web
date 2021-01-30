import { Component, Input, OnInit } from '@angular/core';
import { FormateurService } from "../formateur.service";

@Component({
  selector: 'app-formateur-item',
  templateUrl: './formateur-item.component.html',
  styleUrls: ['./formateur-item.component.css']
})
export class FormateurItemComponent implements OnInit {
  @Input() formateur: any;
  constructor(private formateursServ: FormateurService) { 

  }

  ngOnInit(): void {
  }

  onDelete(){
    this.formateursServ.delete(this.formateur); 
  }
}