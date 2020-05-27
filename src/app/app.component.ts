import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Provider Sample';
  url = undefined;
  data : undefined;

  SendData(){
    this.data = this.url.indexOf();
  }

}
