import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';

import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';

  
const routes: Routes = [
  {path: 'tirage', component: TirageComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: '', component: AccueilComponent},
  {path: 'resultat-tirage', component: ResultatTirageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
