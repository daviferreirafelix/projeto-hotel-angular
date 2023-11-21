import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoLuxoComponent } from './quarto-luxo.component';

describe('QuartoLuxoComponent', () => {
  let component: QuartoLuxoComponent;
  let fixture: ComponentFixture<QuartoLuxoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartoLuxoComponent]
    });
    fixture = TestBed.createComponent(QuartoLuxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
