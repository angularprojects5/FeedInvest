import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FildActualiteComponent } from './fild-actualite.component';

describe('FildActualiteComponent', () => {
  let component: FildActualiteComponent;
  let fixture: ComponentFixture<FildActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FildActualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FildActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
