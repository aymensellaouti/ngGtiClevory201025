import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-som',
    imports: [FormsModule],
    templateUrl: './som.component.html',
    styleUrl: './som.component.css'
})
export class SomComponent {
  x = signal(3);
  y = signal(5);
  z = computed (() => this.x() + this.y());
  doubleZ = computed(() => {
    console.log('DZ');

    return this.z() * 2});
  names = signal(['rim','anas', 'houda', 'emna']);

  addName() {
    this.names.update((names)=> {
      return [...names, 'samar']
    })
  }
  namesLength = computed(() => {
    return this.names().length;
  });
}
