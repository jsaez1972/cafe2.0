import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartNotificationService {
  private montoInfo: BehaviorSubject<number>;

  constructor() {
    let montoInicio =Number( localStorage.getItem('monto_order'));
    this.montoInfo = new BehaviorSubject<number>(montoInicio);
  }

  getValue(): Observable<number> {
    return this.montoInfo.asObservable();
  }
  setValue(newValue: number): void {
    localStorage.setItem('monto_order', newValue.toString());
    this.montoInfo.next(newValue);
  }
}
