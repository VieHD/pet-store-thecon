import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
  newPetForm!: FormGroup;
  constructor() {
    this.newPetForm = new FormGroup({
      petNameControl : new FormControl(null, Validators.required),
      stateControl: new FormControl('Available', Validators.required),
      petIdControl : new FormControl(null, Validators.required),
    });
   }

  ngOnInit(): void {
    
  }

  stats = ['Available', 'Pending', 'Sold']

  // openDialog(): void{
  //   this.dialog.open(DialogComponent, {})
  // }

  onAddPet(){
    console.log(this.newPetForm.value);
  }

}