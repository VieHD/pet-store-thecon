import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/models/pet.model';
import { PetService } from 'src/services/pet.service';
import { displayedColumns, state } from 'src/modules/shared/constante';
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/modules/pet/dialog/dialog.component';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private petService: PetService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(this.clickedRow)
  }
  onViewClick(){
    console.log(this.clickedRow)
  }
  onEditClick() {
    if(this.clickedRow.id != undefined){
      this.router.navigate(["/pet",this.clickedRow.id])
    }
  }
  onDeleteClick(){
    if(this.clickedRow.id != undefined){

    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.petService
        .deletePet(this.clickedRow.id).subscribe( () => setTimeout(() =>{ window.location.reload() },2000));
        this._snackBar.open("Selected Pet Was Deleted!", 'Sounds good!',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
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
