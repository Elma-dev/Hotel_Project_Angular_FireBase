import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhComponent } from './create-ph.component';

describe('CreatePhComponent', () => {
  let component: CreatePhComponent;
  let fixture: ComponentFixture<CreatePhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
