import { Injectable } from '@angular/core';
import { ProductListItem } from '../_interfaces/product-list-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getItems(): Observable<ProductListItem[]> {
    // TODO: replace this with real data from your application
    let EXAMPLE_DATA: ProductListItem[] = [
      { id: 1, name: 'Hydrogen', price: 12200 },
      { id: 2, name: 'Helium', price: 10330 },
      { id: 3, name: 'Lithium', price: 10330 },
      { id: 4, name: 'Beryllium', price: 11100 },
      { id: 5, name: 'Boron', price: 1040 },
      { id: 6, name: 'Carbon', price: 1010 },
      { id: 7, name: 'Nitrogen', price: 1200 },
      { id: 8, name: 'Oxygen', price: 1010 },
      { id: 9, name: 'Fluorine', price: 1020 },
      { id: 20, name: 'Calcium', price: 1001 },
    ];

    return of(EXAMPLE_DATA);
  }
}
