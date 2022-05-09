import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Clients } from '../clients.model';
import { ClientService } from '../client.service';
import cli from '@angular/cli';



@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  public hotelForm:FormGroup;
  public editHotelForm:FormGroup;
  client:Clients[]
  showModal:boolean;
  editClient:Clients
  constructor(public hotelService:HotelService,public formBuilder:FormBuilder,public router:Router,private clientService:ClientService) { 
    this.showModal=false;
    this.hotelForm=this.formBuilder.group({
      idClient:[''],
      Room:[''],
      Start:[''],
      End:[''],
      nmberNight:[''],
      roomType:[''],
      Smoking:['']
    })
    this.editHotelForm=this.formBuilder.group({
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
  onSubmitToEdit(){
    console.log(this.editHotelForm.value.idClient)
    this.hotelService.updateRoom(this.editHotelForm.value,this.editHotelForm.value.idClient);
    this.showModal=false;
  }

  removeRoom(client:Clients){
      console.log(client)
      if(confirm("Are you sure to delete "+client.NomClient)){
        this.hotelService.editRoom(client);
      }
  }

  editModal(client:Clients){
    this.editClient=client;
    this.showModal=true;
  }

}
