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
  dateDATA = new Date();

  labels = ['Volvo', 'Volkswagen', 'Mercedes-Benz', 'BMW', 'Audi', 'Ford', 'Renault', 'Chevrolet', 'SEAT', 'Hyundai', 'Honda', 'Citroen', 'Annat'];
  fuels = ['Bensin', 'Diesel', 'El', 'Miljöbränsle/Hybrid'];
  bodys = ['Småbil', 'Sedan', 'Halvkombi', 'Kombi', 'Coupe', 'Cab', 'SUV', 'Familjebuss', 'Yrkesfordon'];
  gearboxes = ['Automat', 'Manuell'];
  places = ['Blekinge', 'Dalarnas', 'Gotlands', 'Gävleborgs', 'Hallands', 'Jämtlands', 'Jönköpings', 'Kalmar', 'Kronobergs', 'Norrbottens', 'Skåne', 'Stockholms', 'Södermanlands', 'Uppsala', 'Värmlands', 'Västerbottens', 'Västernorrlands', 'Västmanlands', 'Västra Götalands', 'Örebro', 'Östergötlands'];

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
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
      date: this.dateDATA.getFullYear() + '-' + (this.dateDATA.getMonth() + 1) + '-' + this.dateDATA.getDate(),
    })
  }

  createAdvertisement() {
    this.firestore.collection('advertisement').add(this.myForm.value);
    this.router.navigate(['']);
  };
}
