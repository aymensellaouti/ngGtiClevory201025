import { Component } from '@angular/core';
import { randomColor } from '../utils';

@Component({
  selector: 'app-base-node',
  standalone: true,
  template: ``,
})
export class BaseNodeComponent {
  // Exemple from : https://github.com/profanis/codeShotsWithProfanis.git Merci Profanis pour ce travail :D
  get color() {
    return randomColor();
  }
}
