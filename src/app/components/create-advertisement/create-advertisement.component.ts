import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      phone: '',
      place: '',
      registration: '',
      label: '',
      model: '',
      modelYear: '',
      mileage: '',
      body: '',
      gearbox: '',
      fuel: '',
      heading: '',
      text: '',
      price: '',
    })
  }

  createAdvertisement() {
    this.firestore.collection('advertisement').add(this.myForm.value);
    this.router.navigate(['']);
  };
}
