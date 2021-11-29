import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardproblemComponent } from './hardproblem.component';

describe('HardproblemComponent', () => {
  let component: HardproblemComponent;
  let fixture: ComponentFixture<HardproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardproblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
