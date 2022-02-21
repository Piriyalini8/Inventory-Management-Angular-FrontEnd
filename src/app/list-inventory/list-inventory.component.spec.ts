import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInventoryComponent } from './list-inventory.component';

describe('ListInventoryComponent', () => {
  let component: ListInventoryComponent;
  let fixture: ComponentFixture<ListInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
