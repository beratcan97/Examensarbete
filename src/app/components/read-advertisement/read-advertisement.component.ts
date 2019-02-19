import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetAdvertisementService } from '../../services/get-advertisement.service';

@Component({
  selector: 'app-read-advertisement',
  templateUrl: './read-advertisement.component.html',
  styleUrls: ['./read-advertisement.component.css']
})
export class ReadAdvertisementComponent implements OnInit {

  DATA;

  constructor(
    private firestore: AngularFirestore,
    private service: GetAdvertisementService) { }

  ngOnInit() {
    this.service.getAdvertisement().subscribe(items => {
      this.DATA = items.map(item => {
        return item.payload.doc.data()
      })
    });
  }
}
