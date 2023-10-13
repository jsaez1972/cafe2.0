import { Injectable } from '@angular/core';
import { ProductListItem } from '../_interfaces/product-list-item';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  basePath = environment.apiUrl + 'api/Products';
  constructor(private http: HttpClient) {}

  getAll(filter: string): Observable<ProductListItem[]> {
    // TODO: replace this with real data from your application
    return this.http.get<any>(this.basePath + `/All?filter=${filter}`);
  }

  getCart(filter: string): Observable<ProductListItem[]> {
    // TODO: replace this with real data from your application
    return this.http.get<any>(this.basePath + `/Cart?filter=${filter}`);
  }

  getPorId(id: number): Observable<ProductListItem> {
    return this.http.get<any>(this.basePath + `/${id}`);
  }

  create(producto: ProductListItem): Observable<any> {
    return this.http.post<any>(this.basePath + '/Create', producto);
  }
  update(producto: ProductListItem): Observable<any> {
    return this.http.put<any>(
      this.basePath + `/Update/${producto.id}`,
      producto
    );
  }
}
