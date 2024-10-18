import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InviteComponent } from './invite/invite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InviteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cyberpunk-invite';
}
