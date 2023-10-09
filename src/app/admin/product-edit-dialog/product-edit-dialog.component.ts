import { Component, Inject, Optional, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListItem } from 'src/app/_interfaces/product-list-item';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.scss']
})
export class ProductEditDialogComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<ProductEditDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProductListItem
  ) {
    console.log(data);
    this.form.controls['name'].setValue(data.name);    
    this.form.controls['price'].setValue(data.price);
  }

  doAction() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    alert('Thanks! pase');
    this.dialogRef.close({ event: 'Edit' });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
