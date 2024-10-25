import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { InviteComponent } from './invite/invite.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  {
    path: 'invite',
    component: InviteComponent,
    canActivate: [AuthGuard],
  },
];
