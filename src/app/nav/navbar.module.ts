import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarHeaderComponent } from './navbarheader.component';
import { NavbarFooterComponent } from './navbarfooter.component';
import { CartSummaryComponent } from '../stores/cartSummary.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [NavbarHeaderComponent, NavbarFooterComponent, CartSummaryComponent],
  exports: [NavbarHeaderComponent, NavbarFooterComponent]
})

export class NavbarModule { }
