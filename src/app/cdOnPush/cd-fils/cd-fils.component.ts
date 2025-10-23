import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConnectedUser } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-cd-fils',
  templateUrl: './cd-fils.component.html',
  styleUrls: ['./cd-fils.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdFilsComponent {
  @Input()
  name = '';
  @Input({required: true})
  user!: ConnectedUser
}
