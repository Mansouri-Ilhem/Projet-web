import { Component, Input, OnInit } from '@angular/core';
import { PaticipantsService } from "../paticipants.service";

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.css']
})
export class ParticipantItemComponent implements OnInit {
  @Input() participant: any;

  constructor(private participantServ: PaticipantsService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.participantServ.delete(this.participant); 
  }
}