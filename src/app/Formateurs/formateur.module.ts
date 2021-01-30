import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { FormateursComponent } from './formateurs/formateurs.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { FormateurItemListComponent } from './formateur-item-list/formateur-item-list.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';

const formateursRoutes: Routes = [
  { path: 'Formateurs', component: FormateursComponent,
    children: [
      { path: 'add', component: AddFormateurComponent },
      { path: 'edit/:id', component: EditFormateurComponent },
      { path: 'list', component: FormateurItemListComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(formateursRoutes),
    CommonModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class FormateurModule { }