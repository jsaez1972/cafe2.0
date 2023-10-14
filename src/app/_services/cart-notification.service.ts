import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartNotificationService {
  private montoInfo: BehaviorSubject<number>;

  constructor() {
    this.montoInfo = new BehaviorSubject<number>(0);
  }

  getValue(): Observable<number> {
    return this.montoInfo.asObservable();
  }
  setValue(newValue: number): void {
    this.montoInfo.next(newValue);
  }
}
