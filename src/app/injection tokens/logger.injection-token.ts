import { InjectionToken } from "@angular/core";
import { AbstractLoggerSerice } from "./abstract-logger.service";

export const LOGGER_TOKEN = new InjectionToken<AbstractLoggerSerice[]>('LOGGER_TOKEN');
