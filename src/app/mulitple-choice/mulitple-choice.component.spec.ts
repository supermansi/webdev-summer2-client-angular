import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitpleChoiceComponent } from './mulitple-choice.component';

describe('MulitpleChoiceComponent', () => {
  let component: MulitpleChoiceComponent;
  let fixture: ComponentFixture<MulitpleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulitpleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulitpleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
