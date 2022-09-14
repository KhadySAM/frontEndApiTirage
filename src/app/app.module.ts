import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component'

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    AccueilComponent,
    DetailTirageComponent,
    ResultatTirageComponent,
    DetailListeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
