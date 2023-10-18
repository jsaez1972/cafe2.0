import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailDeleteDialogComponent } from './order-detail-delete-dialog.component';

describe('OrderDetailDeleteDialogComponent', () => {
  let component: OrderDetailDeleteDialogComponent;
  let fixture: ComponentFixture<OrderDetailDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(OrderDetailDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
