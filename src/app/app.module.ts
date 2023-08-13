import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/fair-dashboard/fair-card/fair-card.component';
import { FairInfoComponent } from './shared/components/fair-dashboard/fair-info/fair-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
