import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetsComponent } from 'src/modules/pet/components/add-pets/add-pets.component';
import { ListPetsComponent } from 'src/modules/pet/components/list-pets/list-pets.component';
import { EditPetsComponent} from 'src/modules/pet/components/edit-pets/edit-pets.component';
import { ShowPetsComponent } from 'src/modules/pet/components/show-pets/show-pets.component';

const routes: Routes = [
  { path: 'pet', component: AddPetsComponent },
  { path: 'list', component: ListPetsComponent },
  { path: 'pet/:petId', component: EditPetsComponent },
  { path: 'view/:petId', component: ShowPetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
