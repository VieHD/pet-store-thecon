import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetsComponent } from './components/add-pets/add-pets.component';

const routes: Routes = [
  {
  children:[{ path: 'pet', component: AddPetsComponent },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
