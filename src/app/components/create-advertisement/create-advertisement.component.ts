import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  todo = {
    text: "new project",
    completed: true
  }

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.firestore.collection('todo').add(this.todo);
  }

}
