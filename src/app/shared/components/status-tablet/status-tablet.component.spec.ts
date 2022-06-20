import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTabletComponent } from './status-tablet.component';

describe('StatusTabletComponent', () => {
  let component: StatusTabletComponent;
  let fixture: ComponentFixture<StatusTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
