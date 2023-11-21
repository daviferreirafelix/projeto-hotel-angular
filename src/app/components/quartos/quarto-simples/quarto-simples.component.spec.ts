import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoSimplesComponent } from './quarto-simples.component';

describe('QuartoSimplesComponent', () => {
  let component: QuartoSimplesComponent;
  let fixture: ComponentFixture<QuartoSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartoSimplesComponent]
    });
    fixture = TestBed.createComponent(QuartoSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
