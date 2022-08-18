/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrenghtmeterComponent } from './strenghtmeter.component';

describe('StrenghtmeterComponent', () => {
  let component: StrenghtmeterComponent;
  let fixture: ComponentFixture<StrenghtmeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrenghtmeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrenghtmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
