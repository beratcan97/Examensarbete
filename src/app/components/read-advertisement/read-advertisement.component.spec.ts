import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAdvertisementComponent } from './read-advertisement.component';

describe('ReadAdvertisementComponent', () => {
  let component: ReadAdvertisementComponent;
  let fixture: ComponentFixture<ReadAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
