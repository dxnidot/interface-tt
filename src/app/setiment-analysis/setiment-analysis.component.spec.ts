import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetimentAnalysisComponent } from './setiment-analysis.component';

describe('SetimentAnalysisComponent', () => {
  let component: SetimentAnalysisComponent;
  let fixture: ComponentFixture<SetimentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetimentAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetimentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
