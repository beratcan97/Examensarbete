import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { SearchAdvertisementComponent } from './search-advertisement.component';

describe('SearchAdvertisementComponent', () => {
  let component: SearchAdvertisementComponent;
  let fixture: ComponentFixture<SearchAdvertisementComponent>;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAdvertisementComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: Router, useValue: "" },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
