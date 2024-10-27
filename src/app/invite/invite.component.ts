import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AccordionComponent } from '../accordion/accordion.component';
import { IParticipant } from '../data/participants';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [AccordionComponent, MarkdownModule, CommonModule],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss',
})
export class InviteComponent {
  protected participant: IParticipant = {
    handle: '',
    introductionText: '',
    password: '',
    task: '',
  };

  constructor(private _participantService: ParticipantService) {
    if (this._participantService.activeParticipant) {
      this.participant = this._participantService.activeParticipant;
    }
  }
}
