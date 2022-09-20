import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PostulantComponent } from './postulant/postulant.component';


@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    AccueilComponent,
    ResultatTirageComponent,
    DetailListeComponent,
    PostulantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
