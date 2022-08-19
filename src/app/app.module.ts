import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidenavComponent } from './sidenav/sidenav.component'
import { MatListModule } from '@angular/material/list';
import { DefaultModule } from './layouts/default/default.module';
import { WTBListComponent } from './wtblist/wtblist.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MonStockComponent } from './mon-stock/mon-stock.component';
import { CopOrDropComponent } from './cop-or-drop/cop-or-drop.component';
import { MesVentesComponent } from './mes-ventes/mes-ventes.component';
import { FildActualiteComponent } from './fild-actualite/fild-actualite.component';
import { ProfilComponent } from './profil/profil.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { HoldOrSellComponent } from './hold-or-sell/hold-or-sell.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WTBListComponent,
    MonStockComponent,
    CopOrDropComponent,
    MesVentesComponent,
    FildActualiteComponent,
    ProfilComponent,
    MarketplaceComponent,
    HoldOrSellComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    DefaultModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
