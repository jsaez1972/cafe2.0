import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { AuthGuard } from '../_services/auth-guard';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'materials',
    component: MaterialListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
