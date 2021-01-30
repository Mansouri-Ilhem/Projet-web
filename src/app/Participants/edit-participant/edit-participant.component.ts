import { Component, OnInit } from '@angular/core';
import { PaticipantsService } from "../paticipants.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  id;
  private sub: any;
  participant:any;

  constructor(private route: ActivatedRoute, private participantServ: PaticipantsService) {

   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('Participant ID ' + this.id.toString());
    this.participant = this.participantServ.getParticipant(this.id);
  }

  editParticipant(participantItem) {
    console.log(participantItem);
  }
}