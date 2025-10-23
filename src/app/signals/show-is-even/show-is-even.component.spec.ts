import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIsEvenComponent } from './show-is-even.component';

describe('ShowIsEvenComponent', () => {
  let component: ShowIsEvenComponent;
  let fixture: ComponentFixture<ShowIsEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowIsEvenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowIsEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
