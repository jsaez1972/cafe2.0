import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItem } from 'src/app/_interfaces/order';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'totalLine'];
  dataSource1: OrderItem[] = [];
  dataSource = new MatTableDataSource(this.dataSource1);
  orderId = 9;

  mesa: number = 0;
  obs: string = '';
  total: number = 0;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    let id = 9;
    this.orderService.getPorId(id).subscribe((order) => {
      this.mesa = order.tableNumber;
      this.obs = order.comments;
      this.total = order.total;
      this.dataSource.data = order.items;
    });
  }
}
