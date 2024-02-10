import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunshineRequestFormComponent } from './sunshine-request-form.component';

describe('SunshineRequestFormComponent', () => {
  let component: SunshineRequestFormComponent;
  let fixture: ComponentFixture<SunshineRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunshineRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunshineRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
