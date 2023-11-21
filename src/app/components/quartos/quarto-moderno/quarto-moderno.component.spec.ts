import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoModernoComponent } from './quarto-moderno.component';

describe('QuartoModernoComponent', () => {
  let component: QuartoModernoComponent;
  let fixture: ComponentFixture<QuartoModernoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartoModernoComponent]
    });
    fixture = TestBed.createComponent(QuartoModernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
