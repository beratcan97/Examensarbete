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
}
