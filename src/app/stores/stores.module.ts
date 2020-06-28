import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModelModule } from '../models/models.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailsComponent } from './cartDetails.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  declarations: [StoreComponent, CounterDirective, CartDetailsComponent, CheckoutComponent],
  exports: [StoreComponent, CounterDirective, CartDetailsComponent, CheckoutComponent]
})

export class StoresModule { }
