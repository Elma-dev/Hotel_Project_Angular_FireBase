import { Injectable } from '@angular/core';
import cli from '@angular/cli';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@firebase/firestore';
import { Clients } from './clients.model';
import { Hotel } from './hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private angularFireStore:AngularFirestore) { }
  addRoom(hotel:Hotel,id:any){
    this.angularFireStore.collection("client-collection").doc(id).update({
      Room:{
        Room:hotel.Room,
        Start:hotel.Start,
        End:hotel.End,
        nmberNight:hotel.nmberNight,
        roomType:hotel.roomType,
        Smoking:hotel.Smoking,
      }
    })
  }
}
