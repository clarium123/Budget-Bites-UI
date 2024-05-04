/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error-500Component } from './error-500.component';

describe('Error-500Component', () => {
  let component: Error-500Component;
  let fixture: ComponentFixture<Error-500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error-500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error-500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
