import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map, take } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnDestroy{
  firstObservable$: Observable<number>;
  counter = 5;
  subscribtion = new Subscription();
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        } else {
          observer.next(i--);
        }
      }, 1000);
    });
    this.subscribtion.add(this.firstObservable$.subscribe({
      next: (data) => {
        console.log(data);
      },
    }));
    // setTimeout(() => {
    this.subscribtion.add(
    this.firstObservable$
      .pipe(
        //5 4 3 2 1
        map((valeur) => valeur * 3),
        // 15 12 9 6 3
        filter((valeur) => valeur % 2 == 0),
        // 12 6
        take(1)
      )
      .subscribe({
        next: (data) => {
          toaster.info('' + data);
        },
        complete: () => {
          toaster.error('BOOOOOOMMM !!!!!');
        },
      }));
    // this.firstObservable$.subscribe({
    //   next: (data) => {
    //     this.counter = data;
    //   },
    // });
    // }, 3000)
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }
}
