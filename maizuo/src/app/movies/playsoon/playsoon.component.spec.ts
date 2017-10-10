import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaysoonComponent } from './playsoon.component';

describe('PlaysoonComponent', () => {
  let component: PlaysoonComponent;
  let fixture: ComponentFixture<PlaysoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaysoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaysoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
