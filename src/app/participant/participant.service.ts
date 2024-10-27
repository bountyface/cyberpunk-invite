import { Injectable } from '@angular/core';
import { IParticipant } from '../data/participants';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  public activeParticipant?: IParticipant;

  constructor() {}
}
