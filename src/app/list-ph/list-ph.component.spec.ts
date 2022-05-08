import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhComponent } from './list-ph.component';

describe('ListPhComponent', () => {
  let component: ListPhComponent;
  let fixture: ComponentFixture<ListPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
