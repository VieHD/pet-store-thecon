import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from 'src/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  BASE_URL = 'https://petstore.swagger.io/v2/pet'
  BASE_URL_FILTER = 'https://petstore.swagger.io/v2/pet/findByStatus?status='
  

  constructor(private httpClient: HttpClient) { }


  filterPetsByState(selectedValue : string){
    return this.httpClient.get<Pet>(this.BASE_URL_FILTER+selectedValue.toLocaleLowerCase())
  }

  addNewPet(newPet: Pet){
    return this.httpClient.post(this.BASE_URL, newPet)
  }

  editPet(editPet: Pet){
    return this.httpClient.put(this.BASE_URL, editPet);
  }

}
