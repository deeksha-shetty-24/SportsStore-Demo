import { Component } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';
import { Cart } from '../models/cart.model';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})

export class StoreComponent {
  public selectedCategory: string = null;
  public productsPerPage: number = 4;
  public selectedPage: number = 1;
  constructor(private productRepository: ProductRepository, private cart: Cart, private router: Router) { }

  get products(): Product[] {
    const pageIndex = ((this.selectedPage - 1) * this.productsPerPage);
    return this.productRepository.getProducts(this.selectedCategory).splice(pageIndex, this.productsPerPage);

    // return this.productRepository.getProducts(this.selectedCategory);
    // return this.productRepository.getProducts();// First
  }

  get categories(): string[] {
    return this.productRepository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number) { this.selectedPage = newPage; }

  changePageSize(newSize: number) {
    this.productsPerPage = newSize;
    this.changePage(1);
  }

  get pageCount(): number {
    const result = Math.ceil(this.productRepository
      .getProducts(this.selectedCategory).length / this.productsPerPage);
    console.warn(`pageCount -> ${result}`);
    return result;
  }

  get pageNumbers(): number[] {
    const result = Array(Math.ceil(this.productRepository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
    console.log(`pageNumbers-> ${result}`);
    return result;
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);

    this.router.navigateByUrl('/cart');
    // console.log(`Selected Product Will be added to the Cart: ${product}`);
  }
}
