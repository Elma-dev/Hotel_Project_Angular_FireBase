import { Injectable } from '@angular/core';
import cli from '@angular/cli';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, deleteField } from '@firebase/firestore';
import { Clients } from './clients.model';
import { Hotel } from './hotel.model';
import { ReactiveFormsModule } from '@angular/forms';


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
  editRoom(client:Clients){
    this.angularFireStore.collection("client-collection").doc(client.id).update({Room:deleteField()});
  }
  updateRoom(Room:Hotel,id:any){
    return this.angularFireStore.collection("client-collection").doc(id).update({
      Room:{
        End:Room.End,
        Room:Room.Room,
        Smoking:Room.Smoking,
        Start:Room.Start,
        nmberNight:Room.nmberNight,
        roomType:Room.roomType
      }
    })
    
  }
}
