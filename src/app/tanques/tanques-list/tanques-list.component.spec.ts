import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesListComponent } from './tanques-list.component';

describe('TanquesListComponent', () => {
  let component: TanquesListComponent;
  let fixture: ComponentFixture<TanquesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanquesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
