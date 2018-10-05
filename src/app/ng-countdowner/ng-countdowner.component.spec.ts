import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCountdownerComponent } from './ng-countdowner.component';

describe('NgCountdownerComponent', () => {
  let component: NgCountdownerComponent;
  let fixture: ComponentFixture<NgCountdownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCountdownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCountdownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
