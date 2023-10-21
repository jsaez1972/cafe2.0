import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/_interfaces/order';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nameVendor',
    'tableNumber',
    'total',
    'tip',
    'createdDate',
    'status',
  ];
  dataSource1: Order[] = [];
  dataSource = new MatTableDataSource(this.dataSource1);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.orderService.getAlls().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDescripcionStatus(status: number) {
    if (status == 0) return 'Pendiente';
    else if (status == 1) return 'Generada';
    else return status.toString();
  }
}
