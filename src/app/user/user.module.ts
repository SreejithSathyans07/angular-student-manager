import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { MarkListComponent } from './mark-list/mark-list.component';
import { AdmissionComponent } from './admission/admission.component';
import { ConsolidatedComponent } from './mark-list/consolidated/consolidated.component';
import { IndividualComponent } from './mark-list/individual/individual.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    ProfileComponent,
    MarkListComponent,
    AdmissionComponent,
    ConsolidatedComponent,
    IndividualComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class UserModule { }
