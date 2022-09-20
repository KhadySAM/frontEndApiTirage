import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';
import { TirageComponent } from './tirage/tirage.component';
import { PostulantComponent } from './postulant/postulant.component';

const routes: Routes = [
  {path: 'tirage', component: TirageComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'postulant', component: PostulantComponent},
  {path: 'resultat-tirage/:id', component: ResultatTirageComponent},
  {path: 'detail-liste/:idnp', component: DetailListeComponent},
  {path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
