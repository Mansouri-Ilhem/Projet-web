import { Component, OnInit } from '@angular/core';
import { SessionsService } from "../sessions.service";

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems;
  constructor(private sessionServ: SessionsService){

  }

  ngOnInit(): void {
    this.sessionItems = this.sessionServ.get();
  }
}
