import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TirageComponent } from './tirage/tirage.component';
=======
import { AccueilComponent } from './accueil/accueil.component'
>>>>>>> 464f18a00eb8f8e0b245a37bc406017881fac4b3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TirageComponent
=======
    AccueilComponent
    
>>>>>>> 464f18a00eb8f8e0b245a37bc406017881fac4b3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
