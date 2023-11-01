import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MarkListComponent } from './user/mark-list/mark-list.component';
import { AdmissionComponent } from './user/admission/admission.component';
import { ConsolidatedComponent } from './user/mark-list/consolidated/consolidated.component';
import { IndividualComponent } from './user/mark-list/individual/individual.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'mark-list',
    component: MarkListComponent,
    canActivate:[authGuard],
    children: [
      { path: '', redirectTo: 'consolidated', pathMatch: 'full' },
      { 
        path: 'consolidated', 
        component: ConsolidatedComponent 
      },
      {
        path: 'individual',
        component: IndividualComponent,
      },
    ],
  },
  {
    path: 'admission',
    component: AdmissionComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admission/:id',
    component: AdmissionComponent,
    canActivate: [authGuard]
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
