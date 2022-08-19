import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopOrDropComponent } from './cop-or-drop/cop-or-drop.component';
import { FildActualiteComponent } from './fild-actualite/fild-actualite.component';
import { HoldOrSellComponent } from './hold-or-sell/hold-or-sell.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MesVentesComponent } from './mes-ventes/mes-ventes.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MonStockComponent } from './mon-stock/mon-stock.component';
import { PopupComponent } from './popup/popup.component';
import { ChatComponent } from './chat/chat.component';
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
  ,  {
    path:'hold-or-sell',
    component:CopOrDropComponent
  }, 
  {
    path:'cop-or-drop',
    component:HoldOrSellComponent
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
  }  ,  {
    path:'chat',
    component:ChatComponent
  }  ,
  {
    path:'marketplace',
    component:MarketplaceComponent
  }  ,
  {
    path:'popup',
    component:PopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
