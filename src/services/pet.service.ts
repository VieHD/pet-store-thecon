import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from 'src/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  BASE_URL = 'https://petstore.swagger.io/v2/pet/findByStatus?status='
  

  constructor(private httpClient: HttpClient) { }

  getAllPets(){
    return this.httpClient.get<Pet>(this.BASE_URL+"available")
  }

}
