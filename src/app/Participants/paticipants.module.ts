import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { ParticipantItemListComponent } from './participant-item-list/participant-item-list.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { ParticipantsComponent } from './participants/participants.component';

const participantRoutes: Routes = [
  { path: 'Participants', component: ParticipantsComponent,
    children: [
      { path: 'add', component: AddParticipantComponent },
      { path: 'edit/:id', component: EditParticipantComponent },
      { path: 'list', component: ParticipantItemListComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(participantRoutes),
    CommonModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class PaticipantsModule { }