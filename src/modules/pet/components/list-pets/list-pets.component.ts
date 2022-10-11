import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/models/pet.model';
import { PetService } from 'src/services/pet.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {
  
  displayedColumns = ['index', 'name', 'status', 'actions'];
  pets!: Pet[];
  clickedRow = new Set<Pet>();

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService
    .getAllPets().subscribe((data) => { 
      console.log(data)
      //@ts-ignore
      this.pets = data});
    console.log(this.pets)
  }
  onClick(){
    console.log(this.clickedRow)
  }

}
