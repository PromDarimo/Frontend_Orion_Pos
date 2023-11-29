import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCusPage } from './create-cus.page';

describe('CreateCusPage', () => {
  let component: CreateCusPage;
  let fixture: ComponentFixture<CreateCusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateCusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
