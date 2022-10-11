import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/models/pet.model';
import { PetService } from 'src/services/pet.service';
import { displayedColumns, state } from 'src/modules/shared/constante';
import { Router } from "@angular/router";

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
  clickedRow = new Object as Pet;

  constructor(
    private petService: PetService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(this.clickedRow)
  }
  onEditClick() {
    if(this.clickedRow.id != undefined){
      // this.petService.updatePet(this.clickedRow.id,{
      //   ...this.clickedRow
      // })
      // .subscribe(() => this.router.navigate(["/pet",this.clickedRow.id]))
      this.router.navigate(["/pet",this.clickedRow.id])
    }
  }
  onChange(selectedValue : string){
    this.petService
    .filterPetsByState(selectedValue)
    .subscribe((data) => { 
      //@ts-ignore
      this.pets = data});
  }

}
