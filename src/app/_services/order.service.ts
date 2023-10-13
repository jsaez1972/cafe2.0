import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  getActiveOrder():number {
    let order = localStorage.getItem('active_order');
    if (order == undefined) return 0;
    return Number( order);
  }
  setActiveOrder(order:number):void {
    localStorage.setItem('active_order', order.toString());
  }



}
