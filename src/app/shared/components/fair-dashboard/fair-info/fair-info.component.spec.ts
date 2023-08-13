import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairInfoComponent } from './fair-info.component';

describe('FairInfoComponent', () => {
  let component: FairInfoComponent;
  let fixture: ComponentFixture<FairInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
