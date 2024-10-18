import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          // height: '100px',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
        })
      ),
      transition('open => closed', [animate('0.1s')]),
      transition('closed => open', [animate('0.25s')]),
    ]),
  ],
})
export class AccordionComponent implements OnInit {
  @Input() public header = '';
  @Input() public image = '';
  @Input() public closeAccordions$ = new Observable<void>();

  @Output() public onAccordionToggle = new EventEmitter<boolean>();
  public isOpen = false;

  public onAccordionClick(): void {
    this.isOpen = !this.isOpen;
    this.onAccordionToggle.emit(this.isOpen);
  }

  ngOnInit(): void {
    this.closeAccordions$.subscribe({
      next: (value) => {
        this.isOpen = false;
      },
    });
  }
}
