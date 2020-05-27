import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  message : string;
  constructor(private logService : LogService) { 

  }

  ngOnInit(): void {
    this.message = this.logService.sayHello("Second Child Component")
  }

}
