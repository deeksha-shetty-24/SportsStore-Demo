import { Component } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderRepository } from '../models/order.repository';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;
    mouseover: boolean;

    constructor(public order: Order, public orderRepository: OrderRepository) {
        // order.name = 'Tin Tin';
        // order.city = 'Mangaluru';
        // order.state = 'Karnataka';
        // order.country = 'India';
        // order.zip = '575006';
        // order.shipped = false;
        // order.giftwrap = false;
    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.orderRepository.saveOrder(this.order)
                .subscribe(() => {
                    this.orderSent = true;
                    this.submitted = false;
                });
        }
    }
}
