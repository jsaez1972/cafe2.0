import { Pipe, PipeTransform } from '@angular/core';
import { ProductListItem } from '../_interfaces/product-list-item';

@Pipe({ name: 'appProductFilter' })
export class ProductFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: ProductListItem[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
