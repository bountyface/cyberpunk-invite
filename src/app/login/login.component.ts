import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IParticipant, MICHA, ROBIN } from '../data/participants';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected password = '';

  protected allParticipants: Record<string, IParticipant> = { ROBIN, MICHA };
  protected activeParticipant?: IParticipant;

  protected errorMessage = '';

  public constructor(
    private _router: Router,
    private _authService: AuthService,
    private _participantService: ParticipantService
  ) {}

  protected checkPassword(): void {
    for (const [key, value] of Object.entries(this.allParticipants)) {
      if (this.password === value.password) {
        this._participantService.activeParticipant = this.allParticipants[key];
        // login
        this._authService.login();
        // redirect
        this._router.navigate([`invite`]);
      }
    }
    if (!this.activeParticipant) {
      this.errorMessage = 'Falsches Passwort';
      this.password = '';
      setTimeout(() => {
        this.errorMessage = '';
      }, 1500);
    }
  }
}
