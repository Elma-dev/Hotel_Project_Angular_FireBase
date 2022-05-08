import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Clients } from '../clients.model';

@Component({
  selector: 'app-list-ph',
  templateUrl: './list-ph.component.html',
  styleUrls: ['./list-ph.component.css']
})
export class ListPhComponent implements OnInit {
  client:Clients[]
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.getClientList().subscribe(res=>{
      this.client=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as Clients;
      })
    })
  }
  removeClient(client:Clients){
    if(confirm("Are you sure to delete "+client.NomClient)){
      this.clientService.deleteClient(client);
    }
  }

}
