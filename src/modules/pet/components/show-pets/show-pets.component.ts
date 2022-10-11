import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PetService} from 'src/services/pet.service'

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css']
})
export class ShowPetsComponent implements OnInit {
  petId!: number;
  petData : any = {};

  constructor(
    private petService: PetService,
    private currentRoute: ActivatedRoute,
  ) {

    const { petId } = this.currentRoute.snapshot.params;
    
    this.petService.getPetById(petId).subscribe((data) => {
      this.petData = data;
      console.log(this.petData)
    })
   }

  ngOnInit(): void {
  }

}
