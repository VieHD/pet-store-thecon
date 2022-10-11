import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Pet } from 'src/models/pet.model';
import { PetService } from 'src/services/pet.service';
import { state } from 'src/modules/shared/constante';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
  newPetForm!: FormGroup;
  constructor(
    private petService: PetService,
    private router: Router
    ) {
    this.newPetForm = new FormGroup({
      petNameControl : new FormControl(null, Validators.required),
      stateControl: new FormControl('Available', Validators.required),
      petIdControl : new FormControl(null, Validators.required),
    });
   }
   states = state;

  ngOnInit(): void {
    
  }

  // openDialog(): void{
  //   this.dialog.open(DialogComponent, {})
  // }

  onAddPet(){
    const {
      petNameControl,
      stateControl,
      petIdControl,
    } = this.newPetForm.value;

    const newPet = {
      value: {
        id : petIdControl,
        name: petNameControl,
        status: stateControl.toLocaleLowerCase(),

      },
    };

    if(this.newPetForm.valid){
      this.petService
      .addNewPet({
        ...newPet.value
      })
      .subscribe(() => this.router.navigate(["/list"]));
    }
  }

}