import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IngredientsPopUpComponent } from '../ingredients-pop-up/ingredients-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { DishDetail, MealDetail, NewDish } from '@budget-bites/shared/models/meal-detail';
import { AddDishPopUpComponent } from '../add-dish-pop-up/add-dish-pop-up.component';

@Component({
  selector: 'budget-bites-meal-week-card',
  templateUrl: './meal-week-card.component.html',
  styleUrl: './meal-week-card.component.scss'
})
export class MealWeekCardComponent {
  @Input() dateHeading: string = "";
  @Input() daySubHeading: string = "";
  @Input() dateInFullFormat!: Date;
  @Input() mealDetail: MealDetail = {
    breakFast: [],
    lunch: [],
    snacks: [],
    dinner: []
  }
  @Output() addMoreDishEvent = new EventEmitter<NewDish>();
  @Output() removeDishEvent = new EventEmitter<NewDish>();
  done = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
constructor(public dialog: MatDialog){}

  // mealList = ['Briyani', 'Tandoori Chicken'];
  // detail: MealDetail = {
  //   breakFast: [
  //   ],
  //   lunch: [
  //     {
  //       dishName: "Briyani",
  //       imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg",
  //       isFavorite: true,
  //       shortDiscription: "Serves 5",
  //       cuisineType: ""
  //     }
  //   ],
  //   snacks: [
  //   ],
  //   dinner: [
  //     {
  //       dishName: "Tandoori Chicken",
  //       imageUrl: "https://melissasfoodfreedom.com/wp-content/uploads/2023/04/Butter-Chicken-500x500-1.webp",
  //       isFavorite: false,
  //       shortDiscription: "Serves 4",
  //       cuisineType: ""
  //     }
  //   ]
  // }

  dishAction(mealType: string, actionType: string) {
    const dish: DishDetail = {
      dishName: "Briyani",
      // dishName: "Tandoori Chicken",
      imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg",
      // imageUrl: "https://melissasfoodfreedom.com/wp-content/uploads/2023/04/Butter-Chicken-500x500-1.webp",
      isFavorite: true,
      shortDiscription: "Serves 5",
      cuisineType: ""
    }
    if(actionType === "add"){
      const dish = this.dialog.open(AddDishPopUpComponent, {
        data: {mealType},
      });
      dish.afterClosed().subscribe((result:DishDetail) => {
        console.log('result:'+ (result));
        const dishDetails: DishDetail = {
          dishName: result.dishName,
          imageUrl: result.imageUrl,
          isFavorite: result.isFavorite,
          shortDiscription: result.shortDiscription,
          cuisineType: result.cuisineType
        }
        const newDish: NewDish = {
          mealType: mealType,
          dishDetail: dishDetails,
          dateToInsert: this.dateInFullFormat
        }
        this.addMoreDishEvent.emit(newDish);
       
      });
      
    }
    else if(actionType === "delete") {
      const deleteDish: NewDish = {
        mealType: mealType,
        dishDetail: dish,
        dateToInsert: this.dateInFullFormat
      }
      this.removeDishEvent.emit(deleteDish);
    }
  }

  openPopup(dishName: string){
    const dish = this.dialog.open(IngredientsPopUpComponent, {
      data: {title: dishName,},
    });
  }

  drop(event: CdkDragDrop<any>) {
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex,
    //   );
    // }
  }
}
