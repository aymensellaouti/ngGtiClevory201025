import { Injectable } from '@angular/core';
import { AbstractLoggerSerice } from '../injection tokens/abstract-logger.service';


export class Logger2Service extends AbstractLoggerSerice {
  logger(something: any) {
    console.log('From Logger 2 Service :');
    console.log(something);
  }
}
