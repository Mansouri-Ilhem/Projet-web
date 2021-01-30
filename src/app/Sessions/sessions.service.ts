import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './sessions';
import { Session } from './session';
import { FORMATEURSITEMS } from "../Formateurs/formateurs";
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  nbSessions = SESSIONITEMS.length;
  nbForMEAN = 1;
  nbForAngular = 1;
  nbForNodeJS = 2;
  nbForAndroid = 0;
  nbForIonic = 2;
  nbForXamarin = 0;

  constructor() {
  }

  get() {
    return SESSIONITEMS;
  }

  add(sessionItem: Session) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
    if (sessionItem.track === 'MEAN'){
      this.nbForMEAN++;
    }
    if (sessionItem.track === 'Angular'){
      this.nbForAngular++;
    }
    if (sessionItem.track === 'NodeJS'){
      this.nbForNodeJS++;
    }
    if (sessionItem.track === 'Android'){
      this.nbForAndroid++;
    }
    if (sessionItem.track === 'Ionic'){
      this.nbForIonic++;
    }
    if (sessionItem.track === 'Xamarin'){
      this.nbForXamarin++;
    }    
    FORMATEURSITEMS.forEach(element=>{
      if( (sessionItem.FormerFirstName === element.prenom ) && (sessionItem.FormerLastName === element.nom ) ){
        element.nbFormations++;
      }
    })
  }

  delete(sessionItem: Session) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
      if (sessionItem.track === 'MEAN'){
        this.nbForMEAN--;
      }
      if (sessionItem.track === 'Angular'){
        this.nbForAngular--;
      }
      if (sessionItem.track === 'NodeJS'){
        this.nbForNodeJS--;
      }
      if (sessionItem.track === 'Android'){
        this.nbForAndroid--;
      }
      if (sessionItem.track === 'Ionic'){
        this.nbForIonic--;
      }
      if (sessionItem.track === 'Xamarin'){
        this.nbForXamarin--;
      }
      FORMATEURSITEMS.forEach(element=>{
        if( (sessionItem.FormerFirstName === element.prenom ) && (sessionItem.FormerLastName === element.nom ) ){
          element.nbFormations--;
        }
      })
    }
  }

  getSession(id: number) {
    return SESSIONITEMS[id - 1];
  }
}