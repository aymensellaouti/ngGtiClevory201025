import { CanDeactivateFn } from '@angular/router';
import { CanLeaveInterface } from './can-leave.interface';

export const canLeaveGuard: CanDeactivateFn<CanLeaveInterface> = (component, currentRoute, currentState, nextState) => {
  console.log('canLeave');

  return component.canLeave() ?
    true
    : confirm('Etes vous sur de vouloir quitter la page');
};
