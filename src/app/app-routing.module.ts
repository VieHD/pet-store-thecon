import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetsComponent } from 'src/modules/pet/components/add-pets/add-pets.component';
import { ListPetsComponent } from 'src/modules/pet/components/list-pets/list-pets.component';

const routes: Routes = [
  { path: 'pet', component: AddPetsComponent },
  { path: 'list', component: ListPetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
