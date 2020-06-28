import { Component } from '@angular/core';
import { OrderRepository } from '../models/order.repository';
import { Order } from '../models/order.model';

@Component({
    templateUrl: './ordertable.component.html'
})

export class OrderTableComponent {
    public includeShipped = false;

    constructor(private orderRepository: OrderRepository) { }

    getOrders(): Order[] {
        debugger
        return this.orderRepository.getOrders().filter(o => this.includeShipped || o.shipped === false);
    }

    markedShipped(order: Order) {
        order.shipped = true;
        this.orderRepository.updateOrder(order);
    }

    deleteOrder(id: number) {
        this.orderRepository.deleteOrder(id);
    }
}
