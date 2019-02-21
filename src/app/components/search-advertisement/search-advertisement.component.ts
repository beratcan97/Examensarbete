import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetAdvertisementService } from '../../services/get-advertisement.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-advertisement',
  templateUrl: './search-advertisement.component.html',
  styleUrls: ['./search-advertisement.component.css']
})
export class SearchAdvertisementComponent implements OnInit {

  DATA;
  searchForm: FormGroup;
  searchCategories = ['name', 'email', 'phone', 'place', 'registration', 'label', 'model', 'modelYear', 'mileage', 'body', 'gearbox', 'fuel', 'heading', 'text', 'price', 'date'];

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private service: GetAdvertisementService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: '',
      searchCategory: ''
    })
  }

  search() {
    this.service.search(this.searchForm.value.searchTerm, this.searchForm.value.searchCategory).subscribe(items => {
      this.DATA = items.map(item => {
        return item.payload.doc.data()
      })
    });
  }
}
