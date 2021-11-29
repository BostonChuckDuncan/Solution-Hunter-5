import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatshunterComponent } from './whatshunter.component';

describe('WhatshunterComponent', () => {
  let component: WhatshunterComponent;
  let fixture: ComponentFixture<WhatshunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatshunterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatshunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
