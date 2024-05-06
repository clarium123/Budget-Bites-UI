export interface Ingredient {
    quantity: string;
    price: string;
  }
  
  export interface MenuItem {
    name: string;
    ingredients: {
      [key: string]: Ingredient;
    };
    total_price: string;
  }

  export interface DishIngredients {
    name: string;
    ingredients:Ingredients[]
  }
  export interface Ingredients {
    ingredient:IngredientDetails,
    
  }
  export interface IngredientDetails{
    quantity:string,
    price:string
  }
  export interface Steps {
    step_number:string,
    instruction:string
  }
  export interface Recepie {
    name:string,
    steps:Steps[]
  }
  