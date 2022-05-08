import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Clients } from '../clients.model';
import { ClientService } from '../client.service';



@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  public hotelForm:FormGroup;
  client:Clients[]
  constructor(public hotelService:HotelService,public formBuilder:FormBuilder,public router:Router,private clientService:ClientService) { 
    this.hotelForm=this.formBuilder.group({
      idClient:[''],
      Room:[''],
      Start:[''],
      End:[''],
      nmberNight:[''],
      roomType:[''],
      Smoking:['']
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
    console.log(this.hotelForm.value.idClient)
    this.hotelService.addRoom(this.hotelForm.value,this.hotelForm.value.idClient);
    this.router.navigate(['list-client']);
  }

}
