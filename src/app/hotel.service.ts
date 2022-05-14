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

  solde:number;
  constructor(private angularFireStore:AngularFirestore) { }
  addRoom(hotel:Hotel,id:any,type:string){
    console.log(type)
    
    if(type==="client")
      switch (hotel.roomType){
        case "single":
          this.solde=hotel.nmberNight*100;
          break;
        case "double":
          this.solde=hotel.nmberNight*100*2;
          break;
        case "family":
          this.solde=hotel.nmberNight*100*3;
          break;  
      }
        
    else 
      switch (hotel.roomType){
        case "single":
          this.solde=hotel.nmberNight*180;
          break;
        case "double":
          this.solde=hotel.nmberNight*180*2;
          break;
        case "family":
          this.solde=hotel.nmberNight*180*3;
          break;  
      }
    
    this.angularFireStore.collection("client-collection").doc(id).update({
      Solde:this.solde
      ,Room:{
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
  updateRoom(Room:Hotel,id:any,type:string){
    if(type==="client")
      switch (Room.roomType){
        case "single":
          this.solde=Room.nmberNight*100;
          break;
        case "double":
          this.solde=Room.nmberNight*100*2;
          break;
        case "family":
          this.solde=Room.nmberNight*100*3;
          break;  
      }
        
    else 
      switch (Room.roomType){
        case "single":
          this.solde=Room.nmberNight*180;
          break;
        case "double":
          this.solde=Room.nmberNight*180*2;
          break;
        case "family":
          this.solde=Room.nmberNight*180*3;
          break;  
      }
    return this.angularFireStore.collection("client-collection").doc(id).update({
      Solde:this.solde,
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
