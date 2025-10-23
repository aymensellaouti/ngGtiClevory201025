import { Component } from '@angular/core';
import { IsEvenComponent } from "../is-even/is-even.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-is-even',
  imports: [IsEvenComponent, FormsModule],
  templateUrl: './show-is-even.component.html',
  styleUrl: './show-is-even.component.css',
})
export class ShowIsEvenComponent {
  value = 0;
}
