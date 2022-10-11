import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/models/pet.model';
import { PetService } from 'src/services/pet.service';
import { displayedColumns, state } from 'src/modules/shared/constante';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {
  selectedValue: string | undefined;
  states = state;
  displayedColumns = displayedColumns;
  pets!: Pet[];
  clickedRow = new Set<Pet>();

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log(this.clickedRow)
  }
  onChange(selectedValue : string){
    this.petService
    .filterPetsByState(selectedValue)
    .subscribe((data) => { 
      //@ts-ignore
      this.pets = data});
  }

}
