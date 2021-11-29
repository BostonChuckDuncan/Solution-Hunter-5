import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AigaComponent } from './aiga.component';

describe('AigaComponent', () => {
  let component: AigaComponent;
  let fixture: ComponentFixture<AigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
