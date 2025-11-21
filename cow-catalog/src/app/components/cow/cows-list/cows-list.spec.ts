import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsList } from './cows-list';

describe('CowsList', () => {
  let component: CowsList;
  let fixture: ComponentFixture<CowsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CowsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CowsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
