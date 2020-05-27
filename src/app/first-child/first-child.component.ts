import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { APIKEY } from 'src/value';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html'
  
})
export class FirstChildComponent implements OnInit {

  message : string;
  APIKey: any;
  constructor(private logService : LogService, @Inject(APIKEY) apiKey ) { 
      this.APIKey= apiKey;
      console.log(this.APIKey);
  }

  ngOnInit(): void {
    this.message = this.logService.sayHello("First Child Component")
  }

}
