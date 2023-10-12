import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialListItem } from 'src/app/_interfaces/material-list-item';
import { MaterialsService } from 'src/app/_services/materials.service';

@Component({
  selector: 'app-material-add-dialog',
  templateUrl: './material-add-dialog.component.html',
  styleUrls: ['./material-add-dialog.component.scss'],
})
export class MaterialAddDialogComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: [null, Validators.required],
    stock: [null, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<MaterialAddDialogComponent>,
    private matService: MaterialsService
  ) {}

  doAction() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    let material: any = {
      name: this.form.get('name')?.value,
      stock: this.form.get('stock')?.value,
    };

    this.matService.create(material).subscribe((x) => {
      this.dialogRef.close({ event: 'Add' });
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
