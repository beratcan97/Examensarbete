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
import { SearchAdvertisementComponent } from './components/search-advertisement/search-advertisement.component';
import { MyAdvertisementComponent } from './components/my-advertisement/my-advertisement.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './components/start/start.component';

const appRoutes: Routes = [
  { path: 'create-advertisement', component: CreateAdvertisementComponent },
  { path: 'read-advertisement', component: ReadAdvertisementComponent },
  { path: 'search-advertisement', component: SearchAdvertisementComponent },
  { path: 'my-advertisement', component: MyAdvertisementComponent },
  { path: '', component: StartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CreateAdvertisementComponent,
    ReadAdvertisementComponent,
    SearchAdvertisementComponent,
    MyAdvertisementComponent,
    FooterComponent,
    StartComponent,
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
