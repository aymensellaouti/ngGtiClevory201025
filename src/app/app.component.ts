import { Component, inject } from "@angular/core";
import { LoggerService } from "./services/logger.service";
import { SayHelloService } from "./services/sayHello.service";
import { LOGGER_TOKEN } from "./injection tokens/logger.injection-token";
import { NgxUiLoaderService, NgxUiLoaderModule } from "ngx-ui-loader";
import { Router, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ShowIsEvenComponent } from "./signals/show-is-even/show-is-even.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NavbarComponent, NgxUiLoaderModule, RouterOutlet, ShowIsEvenComponent]
})
export class AppComponent {
  private loggerService = inject(LoggerService);
  private sayHelloService = inject(SayHelloService);
  private loggers = inject(LOGGER_TOKEN);

  ngxService = inject(NgxUiLoaderService);
  title = 'Starting Advanced Topics';
  router = inject(Router)
  constructor() {
    const loggers = this.loggers;

    this.loggerService.logger('cc :D');
    this.sayHelloService.hello();
    loggers.forEach((logger) => logger.logger('cc'));
    // this.router.events.subscribe({
    //   next: (eventJdid) => {
    //     if (eventJdid instanceof NavigationStart) {
    //       this.ngxService.start();
    //     } else if (
    //       eventJdid instanceof NavigationEnd ||
    //       eventJdid instanceof NavigationCancel ||
    //       eventJdid instanceof NavigationError
    //     ) {
    //       this.ngxService.stop();
    //     }
    //   }
    // })
  }
}
