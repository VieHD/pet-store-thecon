import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { EditPetsComponent } from './components/edit-pets/edit-pets.component';
import { ShowPetsComponent } from './components/show-pets/show-pets.component';
import { DeletePetsComponent } from './components/delete-pets/delete-pets.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ListPetsComponent,
    AddPetsComponent,
    EditPetsComponent,
    ShowPetsComponent,
    DeletePetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [AddPetsComponent],
})
export class PetModule { }
