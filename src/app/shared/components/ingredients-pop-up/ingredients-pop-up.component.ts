import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DishIngredients, Ingredients, Recepie } from '@budget-bites/shared/models/ingredients-detail';
import { CommonService } from '@budget-bites/shared/services/common/common.service';
import { ApiConstant } from '@budget-bites/shared/utilites/app_constant/apiConstant';


@Component({
  selector: 'app-ingredients-pop-up',
  templateUrl: './ingredients-pop-up.component.html',
  styleUrls: ['./ingredients-pop-up.component.scss']
})
export class IngredientsPopUpComponent implements OnInit {
  dishIngredients:any[]=[];
  dishRecepie:Recepie={name:'',steps:[]};
  constructor(
    public dialogRef: MatDialogRef<IngredientsPopUpComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,private commonService: CommonService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ingredients: { name: string, quantity: string, price: string }[] = [];
  getIngredients(){
     
    this.commonService.get(ApiConstant.generateDishIngredients.replace("{:dishName}",this.data.title).replace("{:serves}",this.data.person)).subscribe({
      next: (response:any) => {
        
        this.dishIngredients=response.ingredients;
      }
    });
  
}
   


  getSteps(){
    this.commonService.get(ApiConstant.generateDishRecepie.replace("{:dishName}",this.data.title)).subscribe({
      next: (response:any) => {
        this.dishRecepie=response;
      }
    });
  }
  ngOnInit(): void {
    this.getIngredients();
    this.getSteps();
  }
}
