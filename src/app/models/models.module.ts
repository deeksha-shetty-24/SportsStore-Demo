import { NgModule } from '@angular/core';

import { ProductRepository } from './product.repository';
import { OrderRepository } from './order.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, RestDataSource, Cart, OrderRepository, Order,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
  ]
})

export class ModelModule { }
