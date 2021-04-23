import { BrowserModule } from "@angular/platform-browser";
import {  NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { EsriMapComponent } from "./publico/esri-map/esri-map.component";
import { HeaderComponent } from "./publico/header/header.component";

import { EsriMapService } from "./services/esri-map.service";
import { AppRoutingModule } from './app-routing.module';

// PrimeNg
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EsriMapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [EsriMapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
