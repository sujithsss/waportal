import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NontechComponent } from './nontech.component';

describe('NontechComponent', () => {
  let component: NontechComponent;
  let fixture: ComponentFixture<NontechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NontechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NontechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
