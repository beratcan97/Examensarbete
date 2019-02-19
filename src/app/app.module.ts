import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CreateAdvertisementComponent } from './components/create-advertisement/create-advertisement.component';
import { ReadAdvertisementComponent } from './components/read-advertisement/read-advertisement.component';

const appRoutes: Routes = [
  { path: 'create-advertisement', component: CreateAdvertisementComponent },
  { path: 'read-advertisement', component: ReadAdvertisementComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CreateAdvertisementComponent,
    ReadAdvertisementComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
