import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

const PROTOCOL = 'http';
const PORT = '3500';

@Injectable()

export class RestDataSource {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        console.log(`From rest datas source ${this.baseUrl + 'products'}`);
        return this.http.get<Product[]>(this.baseUrl + 'products');
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }

    //  All the following are for the admin

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + 'products', product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(this.baseUrl + `products/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(this.baseUrl + `products/${id}`);
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + 'orders');
    }

    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(this.baseUrl + `orders/${id}`);
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, order);
    }
}
