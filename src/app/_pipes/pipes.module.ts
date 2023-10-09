import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFilterPipe } from './material-filter';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  declarations: [MaterialFilterPipe, ProductFilterPipe],
  imports: [CommonModule],
  exports: [MaterialFilterPipe, ProductFilterPipe],
})
export class PipesModule {}
