import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{ path: '', component: PublicComponent },
{ path: 'login', component: LoginComponent },
{ path: 'products', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
