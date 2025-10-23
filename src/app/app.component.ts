import { Component, inject, Inject } from "@angular/core";
import { LoggerService } from "./services/logger.service";
import { SayHelloService } from "./services/sayHello.service";
import { LOGGER_TOKEN } from "./injection tokens/logger.injection-token";
import { AbstractLoggerSerice } from "./injection tokens/abstract-logger.service";
import { NgxUiLoaderService, NgxUiLoaderModule } from "ngx-ui-loader";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { StartCdComponent } from "./change Detection/start-cd/start-cd.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NavbarComponent, StartCdComponent, NgxUiLoaderModule, RouterOutlet]
})
export class AppComponent {
  ngxService = inject(NgxUiLoaderService);
  title = 'Starting Advanced Topics';
  router = inject(Router)
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    @Inject(LOGGER_TOKEN) private loggers: AbstractLoggerSerice[]
  ) {
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
