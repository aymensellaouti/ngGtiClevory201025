import { Injectable } from '@angular/core';
import { AbstractLoggerSerice } from '../injection tokens/abstract-logger.service';


export class Logger3Service extends AbstractLoggerSerice {
  logger(something: any) {
    console.log('From Logger 3 Service :');
    console.log(something);
  }
}
