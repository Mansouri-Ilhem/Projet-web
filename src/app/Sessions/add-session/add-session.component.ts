import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { SessionsService } from "../sessions.service";

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
  session: Session
  constructor(private sessionServ: SessionsService){

  }

  ngOnInit(): void {
  }

  addSession(sessionItem) {
    console.log(sessionItem);
    this.sessionServ.add(sessionItem);
  }
}