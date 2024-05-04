export interface DishDetail {
    dishName: string,
    imageUrl: string,
    isFavorite: boolean,
    shortDiscription: string,
    cuisineType: string
}
  
export interface MealDetail {
    breakFast: DishDetail[],
    lunch: DishDetail[],
    snacks: DishDetail[],
    dinner: DishDetail[]
}

export interface NewDish {
    mealType: string,
    dishDetail: DishDetail,
    dateToInsert: Date
}