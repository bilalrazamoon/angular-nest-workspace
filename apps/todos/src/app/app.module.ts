import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UiModule } from '@myorg/ui';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, UiModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
