import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCdComponent } from './start-cd.component';

describe('StartCdComponent', () => {
  let component: StartCdComponent;
  let fixture: ComponentFixture<StartCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartCdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
