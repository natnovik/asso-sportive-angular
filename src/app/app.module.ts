import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymListComponent } from './gymnasePage/gym-list/gym-list.component';
import { GymnaseService } from './service/gymnase.service';

@NgModule({
  declarations: [
    AppComponent,
    GymListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GymnaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
