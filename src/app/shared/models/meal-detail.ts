export interface GetMeal{
    personID: number,
    username: string,
    mealListDetails: MealListDetails[],
    weekStartDate: string,
    weekEndDate : string,
    totalCost: number
}

export interface MealListDetails{
    planDate: string,
    mealType: string,
    dishList: DishDetail[]  
}

export interface DishDetail {
    // id: number,
    mealPlanID?:number,
    planDate?: string,
    dishName: string,
    imageUrl?: string,
    isFavorite: boolean,
    shortDiscription: string,
    cuisineType: string,
    serves ?: number,
    cost ?: number
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

export interface SaveUserMealDetails{
    username : string,
    mealtype : string
    mealDishList : DishDetail[],
    // totalCost : number
}

export interface WeeklyBudget{
budgetAmount: number,
budgetID:number,
errorMessage:string,
isActive:string,
isError:boolean,
personID:number,
username:string,
weekEndDate:string
weekStartDate:string
}



export interface MealPlanner{
    personID : number,
    username: string,
    mealDetails: MealPlannerDetail[],
    serves: number,
    totalCost: number,
    weekStartDate ?: Date,
    weekEndDate ?: Date
}


export interface MealPlannerDetail{
    mealPlanID: number,
    planDate : Date,
    mealType: string,
    dishName: string,
    isFavourite: boolean,
    shortDiscription: string,
    cuisineType: string
}
