import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCowForm } from './add-cow-form';

describe('AddCowForm', () => {
  let component: AddCowForm;
  let fixture: ComponentFixture<AddCowForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCowForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCowForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
