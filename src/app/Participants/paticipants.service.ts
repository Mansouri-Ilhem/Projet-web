import { Injectable } from '@angular/core';
import { PARTICIPANTSITEMS } from "./Participants";

@Injectable({
  providedIn: 'root'
})
export class PaticipantsService {
  nbParticipants = PARTICIPANTSITEMS.length;

  constructor() { 

  }

  get() {
    return PARTICIPANTSITEMS;
  }

  add(participantItem) {
    participantItem.id = PARTICIPANTSITEMS.length + 1;
    PARTICIPANTSITEMS.push(participantItem);
    this.nbParticipants++;
  }

  delete(participantItem) {
    let index;
    index = PARTICIPANTSITEMS.indexOf(participantItem);
    if (PARTICIPANTSITEMS.indexOf(participantItem) >= 0) {
      PARTICIPANTSITEMS.splice(index, 1);
      this.nbParticipants--;
    }
  }

  getParticipant(id: number) {
    return PARTICIPANTSITEMS[id - 1];
  }
}