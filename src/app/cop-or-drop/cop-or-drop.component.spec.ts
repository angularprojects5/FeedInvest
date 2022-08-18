import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopOrDropComponent } from './cop-or-drop.component';

describe('CopOrDropComponent', () => {
  let component: CopOrDropComponent;
  let fixture: ComponentFixture<CopOrDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopOrDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopOrDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
