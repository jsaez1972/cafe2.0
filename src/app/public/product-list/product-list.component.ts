import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private prodService: ProductsService) {}
  ngOnInit(): void {
    this.prodService.getItems().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  // This is the method which get called from your filter input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregarCarro(element: ProductListItem) {
    console.log(element);
  }
}