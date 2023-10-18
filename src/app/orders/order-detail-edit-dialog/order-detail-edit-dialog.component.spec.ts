import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailEditDialogComponent } from './order-detail-edit-dialog.component';

describe('OrderDetailEditDialogComponent', () => {
  let component: OrderDetailEditDialogComponent;
  let fixture: ComponentFixture<OrderDetailEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailEditDialogComponent]
    });
    fixture = TestBed.createComponent(OrderDetailEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
