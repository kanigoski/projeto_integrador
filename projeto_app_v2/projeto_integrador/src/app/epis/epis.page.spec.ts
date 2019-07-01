import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisPage } from './epis.page';

describe('EpisPage', () => {
  let component: EpisPage;
  let fixture: ComponentFixture<EpisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
