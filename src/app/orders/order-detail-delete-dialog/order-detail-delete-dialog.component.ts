import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from 'src/app/_interfaces/order';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-detail-delete-dialog',
  templateUrl: './order-detail-delete-dialog.component.html',
  styleUrls: ['./order-detail-delete-dialog.component.scss'],
})
export class OrderDetailDeleteDialogComponent {
  nameProduct: string = '';

  constructor(
    public dialogRef: MatDialogRef<OrderDetailDeleteDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: OrderItem,
    private orderService: OrderService
  ) {
    console.log(data);

    this.nameProduct = data.productName;
  }

  delete() {
    /*     this.orderService.updateItem(this.data.id, cantidad!).subscribe((x) => {
      this.dialogRef.close({ event: 'Delete' });
    }); */
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
