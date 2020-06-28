import { Component } from '@angular/core';
import { ProductRepository } from '../models/product.repository';
import { Product } from '../models/product.model';

@Component({
    templateUrl: './producttable.component.html'
})

export class ProductTableComponent {
    constructor(private productRepository: ProductRepository, private product: Product) { }

    getProducts(): Product[] {
        console.log(`request incoming`)
        return this.productRepository.getProducts();
    }

    deleteProduct(id: number) {
        this.productRepository.deleteProduct(id);
    }
}
