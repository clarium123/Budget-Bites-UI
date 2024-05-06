export enum ApiConstant {
    loginAuth = "bbapi/api/Login/IsValidUser",
    addNewDishInCalendar = "bbapi/api/MealPlan/SaveUserMealPlan",
    deleteDishInCalendar = "bbapi/api/MealPlan/DeleteUserMealPlan",
    registerApi ="bbapi/api/UserDetails/CreateUser",
    getDishInCalendar = "bbapi/api/MealPlan/UserMealPlanData",
    addWeeklyBudget = "bbapi/api/Budget/AddUserBudget",
    getWeeklyBudget = "bbapi/api/Budget/FetchUserBudget",

    //LLM API's
    
    generateDishList = "llmapi/GenerateDishesList?cuisineName={:cusType}&dietaryPreference={:foodPre}&mealType={:mealType}&allergiesOrExclusions=",
    generateDishImages="llmapi/GenerateDishImage?dishNames={:dishList}",
    generateDishRecepie ="llmapi/GenerateRecipe/?dishName={:dishName}",
    generateDishIngredients="llmapi/GenerateIngredientsListWithQuantities?dishName={:dishName}&numberOfPersons={:serves}",



}


