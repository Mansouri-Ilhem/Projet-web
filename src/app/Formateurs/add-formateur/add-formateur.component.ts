import { Component, OnInit } from '@angular/core';
import { FormateurService } from "../formateur.service";

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  constructor(private formateursServ: FormateurService) {

   }

  ngOnInit(): void {
  }

  addFormateur(formateurItem) {
    console.log(formateurItem);
    this.formateursServ.add(formateurItem);
  }
}