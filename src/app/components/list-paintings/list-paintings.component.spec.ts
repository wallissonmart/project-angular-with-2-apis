import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaintingsComponent } from './list-paintings.component';

describe('ListPaintingsComponent', () => {
  let component: ListPaintingsComponent;
  let fixture: ComponentFixture<ListPaintingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaintingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
