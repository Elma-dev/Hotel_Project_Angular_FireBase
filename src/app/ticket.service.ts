import { Injectable } from '@angular/core';
import { Clients } from './clients.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, deleteField } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
}
