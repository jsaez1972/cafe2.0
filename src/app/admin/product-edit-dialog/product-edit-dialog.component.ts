import { Component, Inject, OnInit, Optional, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { category } from 'src/app/_interfaces/category';
import { ProductListItem } from 'src/app/_interfaces/product-list-item';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.scss'],
})
export class ProductEditDialogComponent implements OnInit {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    idcategory: [0, Validators.required],
    name: ['', Validators.required],
    price: [0, Validators.required],
  });
  categorias: category[] = [];
  constructor(
    public dialogRef: MatDialogRef<ProductEditDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProductListItem,
    private prodService: ProductsService,
    private catService: CategoryService
  ) {
    console.log(data);

    this.form.controls['idcategory'].setValue(data.categoryProductId);
    this.form.controls['name'].setValue(data.name);
    this.form.controls['price'].setValue(data.unitPrice);
  }

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
      id: this.data.id,
      categoryProductId: this.form.get('idcategory')?.value,
      name: this.form.get('name')?.value,
      unitPrice: this.form.get('price')?.value,
    };

    this.prodService.update(producto).subscribe((x) => {
      this.dialogRef.close({ event: 'Edit' });
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
