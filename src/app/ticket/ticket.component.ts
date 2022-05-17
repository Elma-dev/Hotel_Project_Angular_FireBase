import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Clients } from '../clients.model';
import { ClientService } from '../client.service';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket.model';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  client:Clients[]
  public ticketForm:FormGroup;
  ticketClient:Ticket
  seleCli:Clients;

  constructor(public ticketService:TicketService,public formBuilder:FormBuilder,public router:Router,private clientService:ClientService) { 
    this.ticketForm=this.formBuilder.group({
      References:['']
    })
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
 

  onSubmit(){
    console.log(this.ticketForm.value.References)
    this.client.forEach((e)=>{
        this.seleCli=e;
    })
    let solde=this.seleCli.Solde;
    if(this.seleCli.type==="client"){solde+=10}
    this.ticketService.addTicket(this.ticketForm.value.References,solde);
    this.router.navigate(['home']);
  }
  

}
