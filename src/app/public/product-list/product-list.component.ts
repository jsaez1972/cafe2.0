import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductListItem } from 'src/app/_interfaces/product-list-item';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  dataSource1: ProductListItem[] = [];
  dataSource = new MatTableDataSource(this.dataSource1);

  constructor(private router: Router, private prodService: ProductsService) {}
  ngOnInit(): void {
    this.prodService.getCart('').subscribe((res) => {
      this.dataSource.data = res;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregarCarro(element: ProductListItem) {
    this.router.navigate(['/orders/add-product', element.id]);
  }
}
