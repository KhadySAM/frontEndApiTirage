import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultatTirageComponent } from './resultat-tirage/resultat-tirage.component';


const routes: Routes = [
  {path: 'resultat-tirage', component: ResultatTirageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
