import { Component, Input, } from '@angular/core';

@Component({

  selector: 'budget-bites-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {

  // data grid input properties
@Input() priceText: string = '25';
@Input() serving: string = '4';
@Input() mealName: string = 'Briyani';
//@Input() ingredients: string = '1 cup boiled basmati rice, 600 gm chicken, 1/2 teaspoon mint leaves, 1 tablespoon garam masala powder, 1 teaspoon saffron.';
@Input() imageURL: string = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341';
@Input() calorie: string = '135';


}

