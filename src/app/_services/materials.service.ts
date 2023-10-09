import { Injectable } from '@angular/core';
import { MaterialListItem } from '../_interfaces/material-list-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  constructor() {}

  getItems(): Observable<MaterialListItem[]> {
    // TODO: replace this with real data from your application
    let EXAMPLE_DATA: MaterialListItem[] = [
      { id: 1, name: 'palta', stock: 12200 },
      { id: 2, name: 'bebida', stock: 10330 },
      { id: 3, name: 'Lithium', stock: 10330 },
      { id: 4, name: 'Beryllium', stock: 11100 },
      { id: 5, name: 'Boron', stock: 1040 },
      { id: 6, name: 'Carbon', stock: 1010 },
      { id: 7, name: 'Nitrogen', stock: 1200 },
      { id: 8, name: 'Oxygen', stock: 1010 },
      { id: 9, name: 'Fluorine', stock: 1020 },
      { id: 20, name: 'Calcium', stock: 1001 },
    ];

    return of(EXAMPLE_DATA);
  }
}
