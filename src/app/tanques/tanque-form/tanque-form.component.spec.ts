import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanqueFormComponent } from './tanque-form.component';

describe('TanqueFormComponent', () => {
  let component: TanqueFormComponent;
  let fixture: ComponentFixture<TanqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
