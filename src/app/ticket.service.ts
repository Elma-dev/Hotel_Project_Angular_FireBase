import { Injectable } from '@angular/core';
import { Clients } from './clients.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, deleteField } from '@firebase/firestore';
import { Ticket } from './ticket.model';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private angularFireStore:AngularFirestore) { }

  getTicket(){
    return this.angularFireStore
    .collection("client-collection")
    .snapshotChanges();
  }
  addTicket(References:string,solde:number){
    this.angularFireStore.collection("client-collection").doc(References).update({
      Solde:solde,
    })
    this.angularFireStore.collection("client-collection").doc(References).collection("ticket-collection").add({
        References:References
      
    })
  }
}
