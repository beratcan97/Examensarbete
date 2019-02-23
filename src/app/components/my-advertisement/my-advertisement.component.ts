import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetAdvertisementService } from '../../services/get-advertisement.service';
import { delay } from 'q';

@Component({
  selector: 'app-my-advertisement',
  templateUrl: './my-advertisement.component.html',
  styleUrls: ['./my-advertisement.component.css']
})
export class MyAdvertisementComponent implements OnInit {

  keyForm: FormGroup;

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private service: GetAdvertisementService) { }

  ngOnInit() {
    this.keyForm = this.fb.group({
      customKey: '',
    })
  }

  delete(id) {
    this.firestore.collection('advertisement').doc(id).delete()
      .then(
        res => {
          this.router.navigate(['']);
        }
      ),
      err => {
        console.log(err);
      }
  }

  getKey() {
    this.service.search(this.keyForm.value.customKey, 'customKey').subscribe(items => {
      items.map(item => {
        this.delete(item.payload.doc.id);
      })
    });
  }
}
