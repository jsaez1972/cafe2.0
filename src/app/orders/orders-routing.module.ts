import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'add-product/:idp', component: ProductAddComponent },
  { path: 'detail/:id', component: OrderDetailComponent },
  { path: 'list', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
