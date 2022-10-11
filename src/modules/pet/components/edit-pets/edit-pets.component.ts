import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { PetService } from 'src/services/pet.service';
import { state } from 'src/modules/shared/constante';

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {

  editPetForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private petService: PetService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
    ) {
    this.editPetForm = new FormGroup({
      petNameControl : new FormControl(null, Validators.required, ),
      stateControl: new FormControl('Available', Validators.required),
      petIdControl : new FormControl(parseInt(this.currentRoute.snapshot.params['petId']), Validators.required),
    });
   }

   states = state;

  ngOnInit(): void {
  }
  onEditPet(){

    const {
      petNameControl,
      stateControl,
      petIdControl,
    } = this.editPetForm.value;

    const editPet = {
      value: {
        id : petIdControl,
        name: petNameControl,
        status: stateControl.toLocaleLowerCase(),

      },
    };

    if(this.editPetForm.invalid){
      this._snackBar.open('Please fill required fields!', 'Ok',{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
    });}

    if(this.editPetForm.valid){
      console.log(editPet)
      this.petService
      .editPet({
        ...editPet.value
      })
      .subscribe(() => this.router.navigate(["/list"]));
      this._snackBar.open('Pet Was Edited Succesfully!', 'Sounds good!',{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
}
