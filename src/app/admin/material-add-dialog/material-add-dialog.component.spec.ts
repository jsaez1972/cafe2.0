import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAddDialogComponent } from './material-add-dialog.component';

describe('MaterialAddDialogComponent', () => {
  let component: MaterialAddDialogComponent;
  let fixture: ComponentFixture<MaterialAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialAddDialogComponent]
    });
    fixture = TestBed.createComponent(MaterialAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
