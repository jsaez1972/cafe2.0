import { Component, Optional, Inject, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialListItem } from 'src/app/_interfaces/material-list-item';
import { MaterialsService } from 'src/app/_services/materials.service';

@Component({
  selector: 'app-material-edit-dialog',
  templateUrl: './material-edit-dialog.component.html',
  styleUrls: ['./material-edit-dialog.component.scss'],
})
export class MaterialEditDialogComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    stock: [0, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<MaterialEditDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MaterialListItem,
    private matService: MaterialsService
  ) {
    console.log(data);
    this.form.controls['name'].setValue(data.name);
    this.form.controls['stock'].setValue(data.stock);
  }

  doAction() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    let material: any = {
      id: this.data.id,
      name: this.form.get('name')?.value,
      stock: this.form.get('stock')?.value,
    };

    this.matService.update(material).subscribe((x) => {
      this.dialogRef.close({ event: 'Edit' });
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
