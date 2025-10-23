import { Component, EventEmitter, output, Output } from '@angular/core';
@Component({
    selector: 'app-fils',
    templateUrl: './fils.component.html',
    styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  /**
   *
   * Create event
   */
  //@Output() sendMessageToDad = new EventEmitter<string>();
  sendMessageToDad = output<string>();
  /**
   * Method that emits the data to dad
   */
  sendMessage(): void {
    this.sendMessageToDad.emit('cc papa');
  }
}
