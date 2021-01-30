import { Component, OnInit } from '@angular/core';
import { FormateurService } from "../formateur.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {
  id;
  private sub: any;
  formateur:any;
  constructor(private route: ActivatedRoute, private formateursServ: FormateurService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('Formateur ID ' + this.id.toString());
    this.formateur = this.formateursServ.getFormateur(this.id);
  }
  
  editFormateur(formateurItem) {
    console.log(formateurItem);
  }
}