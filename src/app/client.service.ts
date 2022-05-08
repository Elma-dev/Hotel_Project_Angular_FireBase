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
    console.log(client.id+" remove2")
      return this.angularFireStore
      .collection("client-collection")
      .doc(client.id)
      .delete();
  }
  updateClient(client:Clients,id:any){
    return this.angularFireStore.collection("client-collection").doc(id).update({
      NomClient: client.NomClient,
      NBCompte:client.NBCompte,
      DateTransaction:client.DateTransaction,
      TypeTransaction:client.TypeTransaction,
      NomAgence:client.NomAgence,
      Montant:client.Montant,
      Solde:client.Solde
    })
  }
}
