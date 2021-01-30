import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from "../sessions.service";

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {
  id;
  private sub: any;
  session:any;
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Ionic', 'Xamarin'];
  
  constructor(private route: ActivatedRoute, private sessionServ: SessionsService) { 

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionServ.getSession(this.id);
  }

  editSession(sessionItem) {
    console.log(sessionItem);
  }
}
