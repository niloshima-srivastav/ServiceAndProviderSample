import { Injectable, ErrorHandler, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log("there is no error in my application");
  }
  
}
