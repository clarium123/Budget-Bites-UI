import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '@budget-bites/shared/services/http-service/http.service';
import { AddDishCardComponent } from '@budget-bites/shared/components/add-dish-card/add-dish-card.component';



interface DishDetail {
  dishName: string,
  imageUrl: string,
  isFavorite: boolean,
  shortDiscription: string,
  cuisineType: string
}
@Component({
  selector: 'app-add-dish-pop-up',
  templateUrl: './add-dish-pop-up.component.html',
  styleUrls: ['./add-dish-pop-up.component.scss']
})


export class AddDishPopUpComponent implements OnInit {
  dishForm!:FormGroup;
  toppings = new FormControl();
  dishFilterInput = new FormControl('');
  dishToAdd:DishDetail={dishName: '',
  imageUrl: '',
  isFavorite: false,
  shortDiscription: '',
  cuisineType: ''}
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(
    public dialogRef: MatDialogRef<AddDishPopUpComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,private httpService: HttpService,
    private fb: FormBuilder, 
  ) {
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.initDishFor();
  }

  initDishFor(){
    this.dishForm = this.fb.group({
      foodPreference: ['veg',Validators.requiredTrue],
      cusineSelect: ['',Validators.requiredTrue]
    });
  }
  
  addDish(){

  }
  dish='dosa'
  price=10;
  url="https://melissasfoodfreedom.com/wp-content/uploads/2023/04/Butter-Chicken-500x500-1.webp";
  servees=0;
  handleNumber(i:number){
    console.log(i);
  }
  addDishes(dish:string){
    const dishValue=this.dishForm.value;
     this.dishToAdd.dishName=dish;
     this.dishToAdd.cuisineType=dishValue.cusineSelect;
     this.dishToAdd.imageUrl="";
     this.dishToAdd.isFavorite=false;
    
     this.dialogRef.close(this.dishToAdd);
  }

  getCusines(){
    return [
      'american',
      'indian',

    ]
  }


  getDishes(){
    return {
      "dishes": [
          {
              "name": "Bacon and Eggs"
          },
          {
              "name": "Sausage Biscuits"
          },
          {
              "name": "Chicken and Waffles"
          },
          {
              "name": "Corned Beef Hash"
          },
          {
              "name": "Eggs Benedict"
          },
          {
              "name": "Ham and Cheese Omelette"
          },
          {
              "name": "Blueberry Pancakes with Bacon"
          },
          {
              "name": "Steak and Eggs"
          },
          {
              "name": "Breakfast Burrito with Sausage"
          }
      ]
  }
  }
}
