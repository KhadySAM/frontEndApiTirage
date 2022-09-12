import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component'

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    AccueilComponent,
    DetailTirageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
