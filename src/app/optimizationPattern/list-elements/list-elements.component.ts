import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListElementsComponent {
  @Input() users: User[] = [];

}
