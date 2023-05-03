import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetempbyidComponent } from './getempbyid.component';

describe('GetempbyidComponent', () => {
  let component: GetempbyidComponent;
  let fixture: ComponentFixture<GetempbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetempbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetempbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
