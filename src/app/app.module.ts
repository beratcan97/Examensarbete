import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CreateAdvertisementComponent } from './components/create-advertisement/create-advertisement.component';

const appRoutes: Routes = [
  { path: 'create-advertisement', component: CreateAdvertisementComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CreateAdvertisementComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
