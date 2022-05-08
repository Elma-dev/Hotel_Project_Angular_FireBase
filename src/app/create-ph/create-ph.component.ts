import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-ph',
  templateUrl: './create-ph.component.html',
  styleUrls: ['./create-ph.component.css']
})
export class CreatePhComponent implements OnInit {
  public clientForm:FormGroup;
  constructor(public clientService:ClientService,public formBuilder:FormBuilder,public router:Router) {
    this.clientForm=this.formBuilder.group({
      NomClient: [''],
      NBCompte:[''],
      DateTransaction:[''],
      TypeTransaction:[''],
      NomAgence:[''],
      Montant:[''],
      Solde:['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientService.createClient(this.clientForm.value);
    this.router.navigate(['list-client']);
  }

}
