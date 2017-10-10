import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisetComponent } from './regiset.component';

describe('RegisetComponent', () => {
  let component: RegisetComponent;
  let fixture: ComponentFixture<RegisetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
