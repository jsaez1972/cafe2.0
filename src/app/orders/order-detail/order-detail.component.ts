import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItem } from 'src/app/_interfaces/order';
import { CartNotificationService } from 'src/app/_services/cart-notification.service';
import { OrderService } from 'src/app/_services/order.service';
import { OrderDetailEditDialogComponent } from '../order-detail-edit-dialog/order-detail-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailDeleteDialogComponent } from '../order-detail-delete-dialog/order-detail-delete-dialog.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'quantity',
    'totalLine',
    'action',
  ];
  dataSource1: OrderItem[] = [];
  dataSource = new MatTableDataSource(this.dataSource1);
  orderId = 0;

  mesa: number = 0;
  obs: string = '';
  total: number = 0;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private cartNotifica: CartNotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.orderId = Number(params.get('id'));
      this.loadOrder(this.orderId);
    });
  }

  loadOrder(id: number) {
    this.orderService.getPorId(id).subscribe((order) => {
      this.mesa = order.tableNumber;
      this.obs = order.comments;
      this.total = order.total;
      this.dataSource.data = order.items;
    });
  }

  changeStatus() {
    this.orderService.updateStatus(this.orderId, 1).subscribe((x) => {
      localStorage.removeItem('active_order');

      localStorage.removeItem('monto_order');
      this.cartNotifica.setValue(0);
      this.router.navigate(['/public/products']);
    });
  }

  openDialogEdit(obj: OrderItem) {
    let dialogRef = this.dialog.open(OrderDetailEditDialogComponent, {
      width: '350px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Edit') this.loadOrder(this.orderId);
    });
  }

  openDialogDelete(obj: OrderItem) {
    let dialogRef = this.dialog.open(OrderDetailDeleteDialogComponent, {
      width: '350px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Delete') this.loadOrder(this.orderId);
    });
  }
}
