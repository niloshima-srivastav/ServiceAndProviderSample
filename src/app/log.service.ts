import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  private static count : number = 0;
  constructor() {
    LogService.count = LogService.count + 1;
    console.log("Log Service Count is :" + LogService.count);
   }

   sayHello (name:string)
   {
     return "Hello :" + name;
   }
}
