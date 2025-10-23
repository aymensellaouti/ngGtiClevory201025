import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { BaseNodeComponent } from './base-node.component';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-thirteen',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <span (click)="counterBs.next(counterBs.value + 1)" class="node-label" [style.background-color]="color"
      >13 - {{ counterBs | async }}</span
    >
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class ThirteenComponent extends BaseNodeComponent {
  counterBs = new BehaviorSubject<number>(0);
  // counter$ = this.counterBs.asObservable();
  // counterSignal = signal(0);

  // host = inject(ElementRef);
  // counterService = inject(CounterService);

  constructor() {
    super();
    // fromEvent(this.host.nativeElement, 'click').subscribe(() => {
    //   this.increaseCounter();
    // });
  }

  // increaseCounter() {
  //   this.counterService.increaseCounter();
  // }
}
