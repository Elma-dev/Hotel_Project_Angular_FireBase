import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPhComponent} from './list-ph/list-ph.component'
import {EditPhComponent} from './edit-ph/edit-ph.component'
import {CreatePhComponent} from './create-ph/create-ph.component'
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/create',pathMatch:'full'},
  {path:'create',component:CreatePhComponent},
  {path:'list-client',component:ListPhComponent},
  {path:'update-client/:id',component:EditPhComponent},
  {path:'hotel',component:CreateHotelComponent},
  {path:'home',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
