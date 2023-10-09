import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss'],
})
export class ProductAddDialogComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: [null, Validators.required],
    price: [null, Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<ProductAddDialogComponent>) {}

  doAction() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    alert('Thanks! pase');
    this.dialogRef.close({ event: 'Add' });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
