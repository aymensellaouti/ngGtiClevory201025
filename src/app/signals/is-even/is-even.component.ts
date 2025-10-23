import { Component, computed, input, Input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-is-even',
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css',
})
export class IsEvenComponent {
  x = input(0);
  isEven = computed(() => this.x() % 2 == 0 ? 'isEven' : 'isOdd');
}
