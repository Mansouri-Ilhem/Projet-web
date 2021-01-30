import { Component, OnInit } from '@angular/core';
import { PaticipantsService } from "../paticipants.service";

@Component({
  selector: 'app-participant-item-list',
  templateUrl: './participant-item-list.component.html',
  styleUrls: ['./participant-item-list.component.css']
})
export class ParticipantItemListComponent implements OnInit {
  participantItems;

  constructor(private participantServ: PaticipantsService) { 

  }

  ngOnInit(): void {
    this.participantItems = this.participantServ.get();
  }
}