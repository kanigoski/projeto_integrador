import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentasPage } from './ferramentas.page';

describe('FerramentasPage', () => {
  let component: FerramentasPage;
  let fixture: ComponentFixture<FerramentasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerramentasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerramentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
