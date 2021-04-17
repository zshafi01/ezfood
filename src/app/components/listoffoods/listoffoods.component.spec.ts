import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffoodsComponent } from './listoffoods.component';

describe('ListoffoodsComponent', () => {
  let component: ListoffoodsComponent;
  let fixture: ComponentFixture<ListoffoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoffoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
