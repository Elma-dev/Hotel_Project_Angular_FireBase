import cli from '@angular/cli';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@firebase/firestore';
import { Clients } from './clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  

  constructor(private angularFireStore:AngularFirestore) { }
  getClientDoc(id:any){
    return this.angularFireStore.collection("client-collection")
    .doc(id).valueChanges()
  }

  getClientList(){
    return this.angularFireStore
    .collection("client-collection")
    .snapshotChanges();
  }
  createClient(client:Clients){
    return new Promise<any>((resolve,reject)=>{
      this.angularFireStore
      .collection("client-collection")
      .add(client)
      .then(response=>{console.log(response)},error=>reject(error));
      
    })
  }

  deleteClient(client:Clients){
      return this.angularFireStore
      .collection("client-collection")
      .doc(client.id)
      .delete();
  }
  updateClient(client:Clients,id:any){
    
    if(client.Room!=null){
      if(client.type==="client")
        switch (client.Room.roomType){
          case "single":
            client.Solde=client.Room.nmberNight*100;
              break;
          case "double":
            client.Solde=client.Room.nmberNight*100*2;
            break;
          case "family":
            client.Solde=client.Room.nmberNight*100*3;
            break;  
        }
          
      else 
        switch (client.Room.roomType){
          case "single":
            client.Solde=client.Room.nmberNight*180;
           break;
          case "double":
            client.Solde=client.Room.nmberNight*180*2;
            break;
          case "family":
            client.Solde=client.Room.nmberNight*180*3;
            break;  
        }}

        console.log(client)


    return this.angularFireStore.collection("client-collection").doc(id).update({
      NomClient: client.NomClient,
      Address:client.Address,
      type:client.type,
      Solde:client.Solde
    })
  }
}
