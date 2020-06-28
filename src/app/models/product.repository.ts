import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()

export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  // constructor(private dataSource: StaticDataSource) {
  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe(
      data => {
        this.products = data;
        this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) === index).sort();
      },
      err => { console.log(`Error from dataSource.getProducts().subscribe() -> ${err}`); },
      () => { console.log(`dataSource.getProducts().subscribe() -> Work Completed`); });
  }

  getProducts(category: string = null): Product[] {
    console.log(`Coming from product repo getProducts()`)
    return this.products.filter(c => category == null || category === c.category);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id) {
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    }
    else {
      this.dataSource.updateProduct(product)
        .subscribe(p => this.products.splice(this.products.findIndex(x => x.id === product.id), 1, product));
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(x => this.products.splice(this.products.findIndex(x => x.id === id), 1));
  }
}
