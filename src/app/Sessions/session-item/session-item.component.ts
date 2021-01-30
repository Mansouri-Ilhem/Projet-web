import { Component, Input, OnInit } from '@angular/core';
import { SessionsService } from "../sessions.service";

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;
  constructor(private sessionServ: SessionsService){
  }

  ngOnInit(): void {
  }

  onDelete(){
    this.sessionServ.delete(this.session);
  }
}