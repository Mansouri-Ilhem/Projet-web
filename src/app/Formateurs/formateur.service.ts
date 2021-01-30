import { Injectable } from '@angular/core';
import { Console } from 'console';
import { element } from 'protractor';
import { FORMATEURSITEMS } from "./formateurs";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  nbFormateurs = FORMATEURSITEMS.length;
  firstFormer;
  SecondFormer;
  max = 0;
  Liste = FORMATEURSITEMS;
  constructor() { 

  }

  findBestFormer(){
    FORMATEURSITEMS.sort((a, b) => b.nbFormations - a.nbFormations);
    console.log(this.Liste);
    this.firstFormer = FORMATEURSITEMS[0];
    this.SecondFormer = FORMATEURSITEMS[1];
  }
  get() {
    return FORMATEURSITEMS;
  }

  add(formateurItem) {
    formateurItem.id = FORMATEURSITEMS.length + 1;
    FORMATEURSITEMS.push(formateurItem);
    this.nbFormateurs++;
  }

  delete(formateurItem) {
    let index;
    index = FORMATEURSITEMS.indexOf(formateurItem);
    if (FORMATEURSITEMS.indexOf(formateurItem) >= 0) {
      FORMATEURSITEMS.splice(index, 1);
      this.nbFormateurs--;
    }
  }

  getFormateur(id: number) {
    return FORMATEURSITEMS[id - 1];
  }
}