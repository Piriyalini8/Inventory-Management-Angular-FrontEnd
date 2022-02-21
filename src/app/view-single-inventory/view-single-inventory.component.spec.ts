import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleInventoryComponent } from './view-single-inventory.component';

describe('ViewSingleInventoryComponent', () => {
  let component: ViewSingleInventoryComponent;
  let fixture: ComponentFixture<ViewSingleInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
