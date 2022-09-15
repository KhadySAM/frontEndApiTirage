import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';

import { AccueilComponent } from './accueil/accueil.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';
import { TirageComponent } from './tirage/tirage.component';

  
const routes: Routes = [
  {path: 'tirage', component: TirageComponent},
  {path: 'accueil', component: AccueilComponent},
<<<<<<< HEAD
  {path: 'detail-tirage', component: DetailTirageComponent},
  {path: 'resultat-tirage', component: ResultatTirageComponent},
  {path: '', component: AccueilComponent}
=======
  {path: '', component: AccueilComponent},
  {path: 'resultat-tirage', component: ResultatTirageComponent},



>>>>>>> d9ad0291c12b85d0ec59ca18ea1355286eaab469
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
