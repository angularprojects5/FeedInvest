import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopOrDropComponent } from './cop-or-drop/cop-or-drop.component';
import { FildActualiteComponent } from './fild-actualite/fild-actualite.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MesVentesComponent } from './mes-ventes/mes-ventes.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MonStockComponent } from './mon-stock/mon-stock.component';
import { ProfilComponent } from './profil/profil.component';
import { WTBListComponent } from './wtblist/wtblist.component';

const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,
    children:[{
      path:'',
      component: DashboardComponent
    }]
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'wtblist',
    component:WTBListComponent
  },
  {
    path:'mon-stock',
    component:MonStockComponent
  }
  ,
  {
    path:'cop-or-drop',
    component:CopOrDropComponent
  }, 
  {
    path:'fil-dactualite',
    component:FildActualiteComponent
  },
  {
    path:'mes-ventes',
    component:MesVentesComponent
  }
  ,
  {
    path:'profil',
    component:ProfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
