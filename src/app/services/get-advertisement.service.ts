import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetAdvertisementService {

  constructor(private firestore: AngularFirestore) { }

  getAdvertisement() {
    return this.firestore.collection('advertisement').snapshotChanges();
  }
  orderBy(value) {
    return this.firestore.collection('advertisement', ref =>
      ref
        .orderBy(value)
        .limit(10)).snapshotChanges();
  }
  search(searchValue, orderByValue) {
    return this.firestore.collection('advertisement', ref =>
      ref
        .orderBy(orderByValue)
        .startAt(searchValue)
        .endAt(searchValue)
        .limit(10)).snapshotChanges();
  }
}
