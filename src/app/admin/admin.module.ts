import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { PipesModule } from '../_pipes/pipes.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MaterialAddDialogComponent } from './material-add-dialog/material-add-dialog.component';
import { MaterialEditDialogComponent } from './material-edit-dialog/material-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductAddDialogComponent } from './product-add-dialog/product-add-dialog.component';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductListComponent,
    MaterialListComponent,
    MaterialAddDialogComponent,
    MaterialEditDialogComponent,
    ProductAddDialogComponent,
    ProductEditDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
  ],
})
export class AdminModule {}
