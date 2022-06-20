import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusBoxComponent } from './syllabus-box.component';

describe('SyllabusBoxComponent', () => {
  let component: SyllabusBoxComponent;
  let fixture: ComponentFixture<SyllabusBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
