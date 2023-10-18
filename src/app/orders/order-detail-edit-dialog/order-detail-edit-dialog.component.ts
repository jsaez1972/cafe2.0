import { Component, Inject, OnInit, Optional, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from 'src/app/_interfaces/order';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-detail-edit-dialog',
  templateUrl: './order-detail-edit-dialog.component.html',
  styleUrls: ['./order-detail-edit-dialog.component.scss'],
})
export class OrderDetailEditDialogComponent implements OnInit {
  nameProduct: string = '';
  private fb = inject(FormBuilder);
  form = this.fb.group({
    quantity: [0, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<OrderDetailEditDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: OrderItem,
    private orderService: OrderService
  ) {
    console.log(data);

    this.nameProduct = data.productName;

    this.form.controls['quantity'].setValue(data.quantity);
  }

  ngOnInit(): void {}

  doAction() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    
    let cantidad= this.form.get('quantity')?.value;

    this.orderService.updateItem(this.data.id, cantidad! ).subscribe((x) => {
      this.dialogRef.close({ event: 'Edit' });
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
