import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarModule } from './nav/navbar.module';
import { StoresModule } from './stores/stores.module';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { StoreComponent } from './../app/stores/store.component';
import { CartDetailsComponent } from './../app/stores/cartDetails.component';
import { CheckoutComponent } from './../app/stores/checkout.component';

import { StoreFirstGuard } from '../app/storeFirst.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    StoresModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent },
      { path: 'cart', component: CartDetailsComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(l => l.AdminModule) },
      { path: '**', redirectTo: '/store' }
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
