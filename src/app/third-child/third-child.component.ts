import { Component, OnInit } from '@angular/core';
import { UpdatedLogService } from '../updated-log.service';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit {

  message : string;
  constructor(private logService : UpdatedLogService) { 

  }

  ngOnInit(): void {
    this.message = this.logService.sayHello("Third Child Component")
  }

}
