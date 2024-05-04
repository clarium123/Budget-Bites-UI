import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '@budget-bites/shared/services/http-service/http.service';

export interface DishIngredients {
  name: string;
  persons: number;
  ingredients:Ingredients[]
}
export interface Ingredients {
  ingredient:string,
  quantity:string
}
export interface Steps {
  step_number:string,
  instruction:string
}
export interface Recepie {
  name:string,
  steps:Steps[]
}
@Component({
  selector: 'app-ingredients-pop-up',
  templateUrl: './ingredients-pop-up.component.html',
  styleUrls: ['./ingredients-pop-up.component.scss']
})
export class IngredientsPopUpComponent implements OnInit {
  dishIngredients:DishIngredients={name:'',persons:0,ingredients:[]};
  dishRecepie:Recepie={name:'',steps:[]};
  constructor(
    public dialogRef: MatDialogRef<IngredientsPopUpComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,private httpService: HttpService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  getIngredients(){
    //  const data={
    //   dishName:'sambar',numberOfPersons:1
    // }
    // this.httpService.getAIData('GenerateIngredientsListWithQuantities',data).subscribe ({
    //   next:request=>{
    //     console.log(request);
    //   }
    // }
     
    // )
  return  {

    "name": "sambar",

    "persons": 1,

    "ingredients": [

        {

            "ingredient": "tur dal",

            "quantity": "50gms"

        },

        {

            "ingredient": "tamarind",

            "quantity": "10gms"

        },

        {

            "ingredient": "vegetables",

            "quantity": "100gms"

        },

        {

            "ingredient": "sambar powder",

            "quantity": "10gms"

        },

        {

            "ingredient": "turmeric powder",

            "quantity": "1gm"

        },

        {

            "ingredient": "asafoetida",

            "quantity": "1gm"

        },

        {

            "ingredient": "salt",

            "quantity": "5gms"

        },

        {

            "ingredient": "oil",

            "quantity": "10gms"

        },

        {

            "ingredient": "mustard seeds",

            "quantity": "1gm"

        },

        {

            "ingredient": "curry leaves",

            "quantity": "3gms"

        },

        {

            "ingredient": "coriander leaves",

            "quantity": "3gms"

        }

    ]

}
  
  }

  getSteps(){
    return{
      "name": "sambar",
      "steps": [
          {
              "step_number": "1",
              "instruction": "Start by roasting 100gms of Coriander seeds, 50gms of Chana dal, 50gms of Urad dal, 1-2 Red chili, a pinch of Fenugreek seeds and a pinch of Asafoetida. Once roasted, grind these ingredients into a fine powder."
          },
          {
              "step_number": "2",
              "instruction": "Cut 150gms of veggies like drumstick, carrot, tomato, pumpkin, or eggplant into small pieces."
          },
          {
              "step_number": "3",
              "instruction": "Pressure cook 100gms of Toor dal with a pinch of turmeric. Once cooked mash the dal."
          },
          {
              "step_number": "4",
              "instruction": "In a pan, add 2 tablespoons of oil. Once the oil is hot, add 1 teaspoon mustard seeds, and once they splutter add curry leaves."
          },
          {
              "step_number": "5",
              "instruction": "Now add the cut vegetables to the pan and sauté for a few minutes."
          },
          {
              "step_number": "6",
              "instruction": "Add the cooked and mashed Toor dal to the vegetables. Mix well."
          },
          {
              "step_number": "7",
              "instruction": "Now add the ground spice mix and stir. Add salt to taste."
          },
          {
              "step_number": "8",
              "instruction": "Let it simmer for 10-15 minutes."
          },
          {
              "step_number": "9",
              "instruction": "Garnish with coriander leaves and serve hot with rice."
          }
      ]
  }
  }
  ngOnInit(): void {
    this.dishIngredients=this.getIngredients();
    this.dishRecepie=this.getSteps();
    console.log(this.dishIngredients);
  }
}
