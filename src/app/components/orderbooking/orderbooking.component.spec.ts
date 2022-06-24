import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbookingComponent } from './orderbooking.component';

describe('OrderbookingComponent', () => {
  let component: OrderbookingComponent;
  let fixture: ComponentFixture<OrderbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
