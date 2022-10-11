import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { EditPetsComponent } from './components/edit-pets/edit-pets.component';
import { ShowPetsComponent } from './components/show-pets/show-pets.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListPetsComponent,
    AddPetsComponent,
    EditPetsComponent,
    ShowPetsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [ DialogComponent],
})
export class PetModule { }
