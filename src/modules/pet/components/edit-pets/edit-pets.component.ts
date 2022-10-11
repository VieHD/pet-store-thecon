import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Pet } from 'src/models/pet.model';
import { PetService } from 'src/services/pet.service';
import { state } from 'src/modules/shared/constante';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {

  editPetForm!: FormGroup;
  constructor(
    private petService: PetService,
    private router: Router,
    private currentRoute: ActivatedRoute,
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

    if(this.editPetForm.valid){
      console.log(editPet)
      this.petService
      .editPet({
        ...editPet.value
      })
      .subscribe(() => this.router.navigate(["/list"]));
    }
  }
}
