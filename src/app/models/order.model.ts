
import { Component, Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public giftwrap: boolean;
    public shipped: boolean;

    constructor(public cart?: Cart) { }

    clear() {
        this.id = null;
        this.name = this.city = this.state = this.country = null;
        this.giftwrap = false;
        this.shipped = false;
        this.cart.clear();
    }
}
