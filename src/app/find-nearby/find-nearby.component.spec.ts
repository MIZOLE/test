import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNearbyComponent } from './find-nearby.component';

describe('FindNearbyComponent', () => {
  let component: FindNearbyComponent;
  let fixture: ComponentFixture<FindNearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindNearbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
