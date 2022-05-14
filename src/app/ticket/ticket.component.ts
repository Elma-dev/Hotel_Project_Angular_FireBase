import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Clients } from '../clients.model';
import { ClientService } from '../client.service';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  client:Clients[]
  public ticketForm:FormGroup;

  constructor(public ticketService:TicketService,public formBuilder:FormBuilder,public router:Router,private clientService:ClientService) { 
    
  }

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
 

  onSubmit(){}

}
