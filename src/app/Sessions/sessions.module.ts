import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionsComponent } from './sessions/sessions.component';

const sessionRoutes: Routes = [
  { path: 'Sessions', component: SessionsComponent,
    children: [
      { path: 'add', component: AddSessionComponent },
      { path: 'edit/:id', component: EditSessionComponent },
      { path: 'list', component: SessionItemListComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(sessionRoutes),
    CommonModule,
    FormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class SessionsModule { }