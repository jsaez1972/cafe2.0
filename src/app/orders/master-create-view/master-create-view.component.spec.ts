import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCreateViewComponent } from './master-create-view.component';

describe('MasterCreateViewComponent', () => {
  let component: MasterCreateViewComponent;
  let fixture: ComponentFixture<MasterCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterCreateViewComponent]
    });
    fixture = TestBed.createComponent(MasterCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
