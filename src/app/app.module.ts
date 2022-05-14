import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePhComponent } from './create-ph/create-ph.component';
import { ListPhComponent } from './list-ph/list-ph.component';
import { EditPhComponent } from './edit-ph/edit-ph.component';
import { environment } from 'src/environments/environment';


import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AngularFireModule} from '@angular/fire/compat'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TicketComponent } from './ticket/ticket.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    CreatePhComponent,
    ListPhComponent,
    EditPhComponent,
    CreateHotelComponent,
    HomePageComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
