import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'add-product/:idp', component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
