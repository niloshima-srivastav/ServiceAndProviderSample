import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { LogService } from './log.service';
import { UpdatedLogService } from './updated-log.service';
import { ThirdChildComponent } from './third-child/third-child.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { APIKEY } from 'src/value';
import { FeatureModule } from './feature/feature.module';

var configValue = 9;
var getLogObject = () => {
  if (configValue == 9){
    return new LogService();
  }
  else{
    return new UpdatedLogService();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent
  ],
  imports: [
    BrowserModule, FeatureModule
  ],
  providers: [{provide:LogService, useClass:LogService},
              {provide:UpdatedLogService, useClass: UpdatedLogService},
              {provide:ErrorHandler, useClass: GlobalErrorHandlerService},
            {provide: APIKEY, useValue: {
              APIKEY : '123456'
            }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
