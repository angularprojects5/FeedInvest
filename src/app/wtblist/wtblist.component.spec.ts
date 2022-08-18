import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WTBListComponent } from './wtblist.component';

describe('WTBListComponent', () => {
  let component: WTBListComponent;
  let fixture: ComponentFixture<WTBListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WTBListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WTBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
