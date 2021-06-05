import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceDetailFormComponent } from './resource-details/resource-detail-form/resource-detail-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResourceDetailsComponent,
    ResourceDetailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
