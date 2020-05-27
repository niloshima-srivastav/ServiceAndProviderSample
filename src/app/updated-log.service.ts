import { Injectable } from '@angular/core';

@Injectable()
export class UpdatedLogService {

  private static count : number = 0;
  constructor() {
    UpdatedLogService.count = UpdatedLogService.count + 1;
    console.log("Updated Log Service Count is :" + UpdatedLogService.count);
   }

   sayHello (name:string)
   {
     return "Hello Updated:" + name;
   }

   sayNotHello()
   {
     return "Hello Not Hello";
   }
}
