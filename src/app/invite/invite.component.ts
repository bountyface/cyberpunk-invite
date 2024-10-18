import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AccordionComponent } from '../accordion/accordion.component';
import { IParticipant, ROBIN } from '../data/participants';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [AccordionComponent, MarkdownModule, CommonModule],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss',
})
export class InviteComponent {
  protected participant: IParticipant = { handle: '', introductionText: '' };

  constructor() {
    this.participant = ROBIN;
  }
}
