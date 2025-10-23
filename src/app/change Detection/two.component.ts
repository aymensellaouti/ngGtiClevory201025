import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { BaseNodeComponent } from './base-node.component';
import { FiveComponent } from './five.component';
import { FourComponent } from './four.component';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [FourComponent, FiveComponent],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >2
    </span>

    <app-four class="node" />

    <app-five class="node" />
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class TwoComponent extends BaseNodeComponent {

}
