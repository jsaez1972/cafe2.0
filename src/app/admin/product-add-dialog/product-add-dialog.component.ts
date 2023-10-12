import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { category } from 'src/app/_interfaces/category';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss'],
})
export class ProductAddDialogComponent implements OnInit {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    idcategory: [null, Validators.required],
    name: [null, Validators.required],
    price: [null, Validators.required],
  });

  categorias: category[] = [];
  constructor(
    public dialogRef: MatDialogRef<ProductAddDialogComponent>,
    private prodService: ProductsService,
    private catService: CategoryService
  ) {}

  ngOnInit(): void {
    this.catService.getActives().subscribe((res) => {
      this.categorias = res;
    });
  }

  doAction() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    let producto: any = {
      categoryProductId: this.form.get('idcategory')?.value,
      name: this.form.get('name')?.value,
      unitPrice: this.form.get('price')?.value,
    };

    this.prodService.create(producto).subscribe((x) => {
      this.dialogRef.close({ event: 'Add' });
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
