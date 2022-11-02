import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2orderComponent } from './menu2order.component';

describe('Menu2orderComponent', () => {
  let component: Menu2orderComponent;
  let fixture: ComponentFixture<Menu2orderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu2orderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu2orderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
