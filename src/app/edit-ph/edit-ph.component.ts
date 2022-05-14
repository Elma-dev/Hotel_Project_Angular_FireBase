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
        Address:[''],
        type:[''],
      })

   }
    

  ngOnInit(): void {
  
    const id=this.act.snapshot.paramMap.get('id');
    this.clientService.getClientDoc(id).subscribe(res=>{
      this.clientRef=res;
      this.editForm=this.formBuilder.group({
        Room:[this.clientRef.Room],
        NomClient: [this.clientRef.NomClient],
        Address:[this.clientRef.Address],
        type:[this.clientRef.type],

      })
    })
  }
  onSubmit(){
    const id=this.act.snapshot.paramMap.get('id');
    this.clientService.updateClient(this.editForm.value,id);
    this.router.navigate(['list-client']);
  }

}
