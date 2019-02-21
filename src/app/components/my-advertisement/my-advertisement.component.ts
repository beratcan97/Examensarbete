import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  ) { }

  ngOnInit() {
    this.keyForm = this.fb.group({
      key: '',
    })
  }

  delete() {
    this.firestore.collection('advertisement').doc(this.keyForm.value.key).delete()
      .then(
        res => {
          this.router.navigate(['']);
        }
      ),
      err => {
        console.log(err);
      }
  }
}
