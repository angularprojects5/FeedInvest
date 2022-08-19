import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldOrSellComponent } from './hold-or-sell.component';

describe('HoldOrSellComponent', () => {
  let component: HoldOrSellComponent;
  let fixture: ComponentFixture<HoldOrSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldOrSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldOrSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
