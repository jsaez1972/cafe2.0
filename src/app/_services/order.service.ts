import { Injectable } from '@angular/core';
import { OrderCreate } from '../_interfaces/order-create';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Order, OrderItem } from '../_interfaces/order';
import { OrderCreateItem } from '../_interfaces/order-create-item';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  basePath = environment.apiUrl + 'api/Orders';
  constructor(private http: HttpClient) {}

  getActiveOrder(): number {
    let order = localStorage.getItem('active_order');
    if (order == undefined) return 0;
    return Number(order);
  }
  setActiveOrder(order: number): void {
    localStorage.setItem('active_order', order.toString());
  }

  create(order: OrderCreate): Observable<number> {
    return this.http.post<any>(this.basePath, order);
  }

  getPorId(id: number): Observable<Order> {
    return this.http.get<any>(this.basePath + `/${id}`);
  }

  createItem(orderItem: OrderCreateItem): Observable<null> {
    return this.http.post<any>(this.basePath + '/CreateItem', orderItem);
  }

  update(idOrder: number, status: number, tip: number): Observable<null> {
    return this.http.put<any>(
      this.basePath + `/${idOrder}/${status}/${tip}`,
      null
    );
  }

  updateItem(idOrderItem: number, quantity: number): Observable<any> {
    return this.http.put<any>(
      this.basePath + `/Item/Update/${idOrderItem}/${quantity}`,
      null
    );
  }

  getAlls(): Observable<Order[]> {
    return this.http.get<any>(this.basePath + `/0/30/kk`);
  }
}
