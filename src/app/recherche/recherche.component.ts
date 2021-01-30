import { Component, OnInit } from '@angular/core';
import { SessionsService } from "../Sessions/sessions.service";


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  sessionItems;
  name;
  list;   

  constructor(private sessionServ: SessionsService) {

   }

  ngOnInit(): void {
    this.sessionItems = this.sessionServ.get();
    this.sessionItems.forEach(element => {
      if ( element.track === this.name ){
        this.list.push(element);
      }
    });
    console.log(this.sessionItems);
  }
}