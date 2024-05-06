import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddDishCardComponent } from '@budget-bites/shared/components/add-dish-card/add-dish-card.component';
import { DishDetail } from '@budget-bites/shared/models/meal-detail';
import { ApiConstant } from '@budget-bites/shared/utilites/app_constant/apiConstant';
import { Dish } from '@budget-bites/shared/models/dish-details';
import { CommonService } from '@budget-bites/shared/services/common/common.service';



@Component({
  selector: 'app-add-dish-pop-up',
  templateUrl: './add-dish-pop-up.component.html',
  styleUrls: ['./add-dish-pop-up.component.scss']
})


export class AddDishPopUpComponent implements OnInit {
  dishForm!: FormGroup;
  toppings = new FormControl();
  dishFilterInput = new FormControl('');
  dishToAdd: DishDetail = {
    dishName: '',
    imageUrl: '',
    isFavorite: false,
    shortDiscription: '',
    cuisineType: '',
    cost:0
  }
  dishes: Dish[] = [];
  dishesTemp: Dish[] = [];
  constructor(
    public dialogRef: MatDialogRef<AddDishPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private commonService: CommonService
  ) {
    // this.dishesTemp=this.dishes;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.initDishFor();

  }

  initDishFor() {
    this.dishForm = this.fb.group({
      foodPreference: ['', Validators.required],
      cusineSelect: ['', Validators.required]
    });

  }

  addDish() {
    this.isLoading = true;
    this.getDishes();
  }
  dish = 'dosa'
  price = 10;
  url = "https://melissasfoodfreedom.com/wp-content/uploads/2023/04/Butter-Chicken-500x500-1.webp";
  servees = 0;
  handleNumber(i: number) {
    console.log(i);
  }
  addDishes(dish: Dish) {
    const dishValue = this.dishForm.value;
    this.dishToAdd.serves = this.servingSize;
    this.dishToAdd.dishName = dish.name;
    this.dishToAdd.cuisineType = dishValue.cusineSelect;
    this.dishToAdd.imageUrl = dish.url;
    this.dishToAdd.isFavorite = false;
    this.dishToAdd.cost=parseFloat(dish.price.replace("$", ""))
    this.dishToAdd.shortDiscription = "Serves " + this.servingSize;
    this.dialogRef.close(this.dishToAdd);
  }
  servingSize = 1
  increaseServingSize(): void {
    this.servingSize++;
  }

  decreaseServingSize(): void {
    if (this.servingSize > 1) {
      this.servingSize--;

    }
  }
  getCusines() {
    return [

      'American', 'Chinese', 'Cuban', 'Greek', 'Indian', 'Italian', 'Japanese', 'Korean', 'Mexican', 'Thai', 'Vietnamese'
    ]
  }

  getPreference() {
    return [
      'Vegetarian', 'Non-vegetarian', 'Vegan', 'Paleo', 'Keto', 'DASH', 'Gluten-Free', 'Eggetarian'
    ]
  }

  
  urls: any = [];
  isLoading = false;
  getDishes() {
    this.dishes = [];
    const data = this.dishForm.value;
    const dish: any = [];


    const cusType = data.cusineSelect;
    const foodPre = data.foodPreference;
    this.commonService.get(ApiConstant.generateDishList.replace("{:cusType}",cusType).replace("{:foodPre}",foodPre).replace("{:mealType}",this.data.mealType)).subscribe({
      next: (response: any) => {
        response.dishes.forEach((element: any) => {

          dish.push(element.name)
        });
        this.commonService.get(ApiConstant.generateDishImages.replace("{:dishList}",dish)).subscribe({
          next: (res: any) => {
            this.urls = res;
            response.dishes.forEach((element: any, index: number) => {

              const dishObj: Dish = { name: element.name, price: element.price, url: this.urls[index] };
              this.dishes.push(dishObj);
            });
            this.isLoading = false;
          }
        });

        this.dishesTemp = this.dishes;
        
      }

    });

  }

  filterData() {
    const valueToFilter = this.dishFilterInput.value !== null ? this.dishFilterInput.value.toLowerCase() : '';
    console.log(valueToFilter);
    this.dishes = this.dishesTemp.filter((item: any) => {
      return JSON.stringify(item.name).toLowerCase().includes(valueToFilter)
    })

  }
}
