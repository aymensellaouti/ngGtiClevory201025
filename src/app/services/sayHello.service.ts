import { Injectable, inject } from "@angular/core";
import { LoggerService } from "./logger.service";
@Injectable({
  providedIn: 'root'
})
export class SayHelloService {
  private loggerService = inject(LoggerService);

  hello() {
    this.loggerService.logger('Hello');
  }
}
