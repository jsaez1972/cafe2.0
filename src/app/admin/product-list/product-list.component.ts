import { Component, OnInit } from '@angular/core';
import { ProductListItem } from 'src/app/_interfaces/product-list-item';
import { ProductsService } from 'src/app/_services/products.service';
import { PipesModule } from 'src/app/_pipes/pipes.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddDialogComponent } from '../product-add-dialog/product-add-dialog.component';
import { ProductEditDialogComponent } from '../product-edit-dialog/product-edit-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  dataSource1: ProductListItem[] = [];
  dataSource = new MatTableDataSource(this.dataSource1);

  constructor(private prodService: ProductsService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.prodService.getAll('').subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  // This is the method which get called from your filter input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(ProductAddDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add')
        this.prodService.getAll('').subscribe((res) => {
          this.dataSource.data = res;
        });
    });
  }

  openDialogEdit(obj: ProductListItem) {
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      width: '350px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Edit')
        this.prodService.getAll('').subscribe((res) => {
          this.dataSource.data = res;
        });
    });
  }
}
