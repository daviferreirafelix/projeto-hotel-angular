import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitorioSimplesComponent } from './dormitorio-simples.component';

describe('DormitorioSimplesComponent', () => {
  let component: DormitorioSimplesComponent;
  let fixture: ComponentFixture<DormitorioSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DormitorioSimplesComponent]
    });
    fixture = TestBed.createComponent(DormitorioSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
