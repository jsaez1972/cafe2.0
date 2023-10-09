import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MaterialListItem } from 'src/app/_interfaces/material-list-item';
import { MaterialsService } from 'src/app/_services/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialAddDialogComponent } from '../material-add-dialog/material-add-dialog.component';
import { MaterialEditDialogComponent } from '../material-edit-dialog/material-edit-dialog.component';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss'],
})
export class MaterialListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'stock','action'];
  dataSource1: MaterialListItem[] = [];
  dataSource = new MatTableDataSource(this.dataSource1);

  constructor(private matService: MaterialsService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.matService.getItems().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  // This is the method which get called from your filter input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(MaterialAddDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add')
        this.matService.getItems().subscribe((res) => {
          this.dataSource.data = res;
        });
    });
  }

  openDialogEdit(obj: MaterialListItem) {
    const dialogRef = this.dialog.open(MaterialEditDialogComponent, {
      width: '350px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Edit')
        this.matService.getItems().subscribe((res) => {
          this.dataSource.data = res;
        });
    });
  }
}
