import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkalloComponent } from './workallo.component';

describe('WorkalloComponent', () => {
  let component: WorkalloComponent;
  let fixture: ComponentFixture<WorkalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkalloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
