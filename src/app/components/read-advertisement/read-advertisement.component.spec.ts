import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ReadAdvertisementComponent } from './read-advertisement.component';

xdescribe('ReadAdvertisementComponent', () => {
  let component: ReadAdvertisementComponent;
  let fixture: ComponentFixture<ReadAdvertisementComponent>;

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
      declarations: [ReadAdvertisementComponent],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: Router, useValue: "" },
      ]
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
