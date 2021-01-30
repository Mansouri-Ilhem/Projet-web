import { Component, OnInit } from '@angular/core';
import { SessionsService } from "../Sessions/sessions.service";
import { PaticipantsService } from "../Participants/paticipants.service";
import { FormateurService } from "../Formateurs/formateur.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public sessionServ: SessionsService, public participantServ: PaticipantsService, public formateurServ: FormateurService) {
    this.formateurServ.findBestFormer();
  }
  
  ngOnInit(): void {

  }
}