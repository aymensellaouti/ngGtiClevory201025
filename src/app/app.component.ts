import { Component, Inject } from "@angular/core";
import { LoggerService } from "./services/logger.service";
import { SayHelloService } from "./services/sayHello.service";
import { LOGGER_TOKEN } from "./injection tokens/logger.injection-token";
import { AbstractLoggerSerice } from "./injection tokens/abstract-logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    @Inject(LOGGER_TOKEN) private loggers: AbstractLoggerSerice[]
  ) {
    this.loggerService.logger('cc :D');
    this.sayHelloService.hello();
    loggers.forEach(logger => logger.logger('cc'))
  }
  title = "Starting Advanced Topics";
}
