import { Component, OnInit } from '@angular/core';
import { FormateurService } from "../formateur.service";

@Component({
  selector: 'app-formateur-item-list',
  templateUrl: './formateur-item-list.component.html',
  styleUrls: ['./formateur-item-list.component.css']
})
export class FormateurItemListComponent implements OnInit {
  formateurItems;

  constructor(private formateursServ: FormateurService) {

   }

  ngOnInit(): void {
    this.formateurItems = this.formateursServ.get();
  }

}