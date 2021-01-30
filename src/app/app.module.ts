import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionsComponent } from './Sessions/sessions/sessions.component';
import { FormateursComponent } from './Formateurs/formateurs/formateurs.component';
import { ParticipantsComponent } from './Participants/participants/participants.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { AddSessionComponent } from './Sessions/add-session/add-session.component';
import { EditSessionComponent } from './Sessions/edit-session/edit-session.component';
import { SessionItemComponent } from './Sessions/session-item/session-item.component';
import { SessionItemListComponent } from './Sessions/session-item-list/session-item-list.component';
import { SessionsModule } from './Sessions/sessions.module';
import { FormsModule } from "@angular/forms";
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { ParticipantItemComponent } from './Participants/participant-item/participant-item.component';
import { PaticipantsModule } from './Participants/paticipants.module';
import { ParticipantItemListComponent } from './Participants/participant-item-list/participant-item-list.component';
import { AddParticipantComponent } from './Participants/add-participant/add-participant.component';
import { EditParticipantComponent } from './Participants/edit-participant/edit-participant.component';
import { EditFormateurComponent } from './Formateurs/edit-formateur/edit-formateur.component';
import { AddFormateurComponent } from './Formateurs/add-formateur/add-formateur.component';
import { FormateurItemComponent } from './Formateurs/formateur-item/formateur-item.component';
import { FormateurItemListComponent } from './Formateurs/formateur-item-list/formateur-item-list.component';
import { FormateurModule } from './Formateurs/formateur.module';
import { RechercheComponent } from './recherche/recherche.component';

const routes : Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Recherche', component: RechercheComponent },
  { path: 'Sessions', loadChildren: './Sessions/sessions.module#SessionsModule' },
  { path: 'Formateurs', loadChildren: './Formateurs/formateurs.module#FormateursModule' },
  { path: 'Participants', loadChildren: './Participants/paticipants.module#PaticipantsModule' },
  { path: '**', component: PageIntrouvableComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SessionsComponent,
    FormateursComponent,
    ParticipantsComponent,
    PageIntrouvableComponent,
    AddSessionComponent,
    EditSessionComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    ParticipantItemComponent,
    ParticipantItemListComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    EditFormateurComponent,
    AddFormateurComponent,
    FormateurItemComponent,
    FormateurItemListComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    SessionsModule,
    PaticipantsModule,
    FormateurModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
