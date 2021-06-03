import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletComponent } from './leaflet/leaflet.component';
@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
