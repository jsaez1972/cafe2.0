import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialListComponent } from './material-list/material-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'products', component: ProductListComponent },  
  { path: 'materials', component: MaterialListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
