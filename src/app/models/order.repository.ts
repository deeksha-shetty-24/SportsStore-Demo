import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()

export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    // constructor(private dataSource: StaticDataSource) {
    // }

    // getOrders(): Order[] {
    //     return this.orders;
    // }
    constructor(private dataSource: RestDataSource) { }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(order => this.orders = order);
    }

    getOrders() {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order)
            .subscribe(p => this.orders.splice(this.orders.findIndex(x => x.id === order.id), 1, order));
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(x => this.orders.splice(this.orders.findIndex(order => order.id === id)));
    }
}
