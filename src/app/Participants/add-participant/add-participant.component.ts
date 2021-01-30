import { Component, OnInit } from '@angular/core';
import { PaticipantsService } from "../paticipants.service";

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(private participantServ: PaticipantsService) { }

  ngOnInit(): void {
  }

  addParticipant(participantItem) {
    console.log(participantItem);
    this.participantServ.add(participantItem);
  }
}