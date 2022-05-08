import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-ph',
  templateUrl: './edit-ph.component.html',
  styleUrls: ['./edit-ph.component.css']
})
export class EditPhComponent implements OnInit {
  public editForm:FormGroup;
  clientRef:any
  constructor(
    public clientService:ClientService,
    public formBuilder:FormBuilder,
    private act:ActivatedRoute,
    private router:Router
  ) 
    {
      this.editForm=this.formBuilder.group({
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
  
    const id=this.act.snapshot.paramMap.get('id');
    this.clientService.getClientDoc(id).subscribe(res=>{
      this.clientRef=res;
      this.editForm=this.formBuilder.group({
        NomClient: [this.clientRef.NomClient],
        NBCompte:[this.clientRef.NBCompte],
        DateTransaction:[this.clientRef.DateTransaction],
        TypeTransaction:[this.clientRef.TypeTransaction],
        NomAgence:[this.clientRef.NomAgence],
        Montant:[this.clientRef.Montant],
        Solde:[this.clientRef.Solde]
      })
    })
  }
  onSubmit(){
    const id=this.act.snapshot.paramMap.get('id');
    this.clientService.updateClient(this.editForm.value,id);
    this.router.navigate(['list-client']);
  }

}
