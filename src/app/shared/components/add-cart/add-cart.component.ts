
import { Component  } from '@angular/core';



export interface PeriodicElement {
  //name: string;
  ingredient: string;
  position: number;
  quantity: string;
  //symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [


  {position: 1, ingredient: "tur dal",quantity: "50gms"},
  {position: 2, ingredient: "tamarind",quantity: "10gms"},
  {position: 3, ingredient: "vegetables",quantity: "100gms"},
  {position: 4, ingredient: "sambar powder",quantity: "10gms"},
  {position: 5, ingredient: "turmeric powder",quantity: "1gm"},
  {position: 6, ingredient: "asafoetida", quantity: "1gm"},
  {position: 7, ingredient: "salt",quantity: "5gms"},
  {position: 8, ingredient: "oil",quantity: "10gms"},
  {position: 9, ingredient: "mustard seeds",quantity: "1gm"},
  {position: 10, ingredient: "curry leaves", quantity: "3gms"},
  {position: 11, ingredient: "coriander leaves",quantity: "3gms"}
];



@Component({
  selector: 'budget-bites-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.scss',
  
})
export class AddCartComponent {

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'ingredient', 'quantity'];
  dataSource = ELEMENT_DATA;
}
