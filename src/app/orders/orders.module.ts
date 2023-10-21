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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MasterCreateViewComponent } from './master-create-view/master-create-view.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MatTableModule } from '@angular/material/table';
import { OrderDetailEditDialogComponent } from './order-detail-edit-dialog/order-detail-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderDetailDeleteDialogComponent } from './order-detail-delete-dialog/order-detail-delete-dialog.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    OrdersComponent,
    ProductAddComponent,
    MasterCreateViewComponent,
    OrderDetailComponent,
    OrderDetailEditDialogComponent,
    OrderDetailDeleteDialogComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OrdersModule {}
