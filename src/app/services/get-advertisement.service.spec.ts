import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { GetAdvertisementService } from './get-advertisement.service';

describe('GetAdvertisementService', () => {

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
      { provide: Router, useValue: "" },
    ]
  }));

  it('should be created', () => {
    const service: GetAdvertisementService = TestBed.get(GetAdvertisementService);
    expect(service).toBeTruthy();
  });
});
