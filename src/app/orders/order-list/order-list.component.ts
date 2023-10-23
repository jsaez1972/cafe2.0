import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { Order } from 'src/app/_interfaces/order';
import { OrderPagedList } from 'src/app/_interfaces/order-paged-list';
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
  totalElements = 0;
  pageSize = 10;
  currentPage = 0;

  //  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.orderService
      .getPaged(this.pageSize, this.currentPage)
      .subscribe((res) => {
        this.dataSource.data = res.rows;
        //      this.dataSource.paginator = this.paginator;

        this.totalElements = res.totalRows;
      });
  }

  nextPage(event: PageEvent) {
    const request = {};
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getdata();
  }

  getDescripcionStatus(status: number) {
    if (status == 0) return 'Pendiente';
    else if (status == 1) return 'Generada';
    else return status.toString();
  }
}
