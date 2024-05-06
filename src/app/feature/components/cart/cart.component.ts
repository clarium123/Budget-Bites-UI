import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';


import{CartCardComponent} from '../../../shared/components/cart-card/cart-card.component'
import { MenuItem } from '@budget-bites/shared/models/ingredients-detail';
@Component({
  selector: 'budget-bites-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent implements OnInit{
  totalPrice: number = 0;
    currentMonth!: string;
    weeks: { startDate: Date, endDate: Date }[] = [];
    endWeek:[]=[]
    month:number=0;
    year:number=0;
    constructor(private datePipe: DatePipe) {}
  
    ngOnInit(): void {
      this.updateMonthDisplay(new Date());
      this.month=new Date().getMonth();
      this.year=new Date().getFullYear();
    }
  
    updateMonthDisplay(date: Date): void {
      this.currentMonth = this.datePipe.transform(date, 'MMMM yyyy')!;
      this.generateWeeks(date);
    }
  
    prevMonth(): void {
      this.month--;
      if(this.month<0){
        this.month=11;
        this.year--;
      }
      const prevMonth = new Date(this.year,this.month);
      this.updateMonthDisplay(prevMonth);
    }
  
    nextMonth(): void {
      this.month++;
      if(this.month>11){
        this.month=0;
        this.year++;
      }
      const nextMonth = new Date(this.year,this.month);
      this.updateMonthDisplay(nextMonth);
    }
    
    generateWeeks(date: Date): void {
      this.weeks = [];
      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
      
      let sDate = new Date(firstDayOfMonth);
      sDate.setDate(sDate.getDate() - sDate.getDay());
    
      
      while (sDate <= lastDayOfMonth) {
        const startDate= new Date(sDate);
        const endDate = new Date(startDate);
        //sDate.setDate(startDate.getDate());
        endDate.setDate(endDate.getDate() + 6);
        
        this.weeks.push({ startDate, endDate });
        sDate.setDate(sDate.getDate() + 7);
      }
     
    }
    
  
    selectWeek(week: { startDate: Date, endDate: Date }): void {
      // Handle week selection
      console.log('Selected week:', week);
    }
    formatDate(date: Date): string {
      return this.datePipe.transform(date, 'dd/MM')!;
    }

    menuItem: MenuItem = {
      "name": "Steak, Egg & Cheese Bagel",
      "ingredients": {
        "Steak": {
          "quantity": "100 gms",
          "price": "$3.50"
        },
        "Egg": {
          "quantity": "50 gms",
          "price": "$0.30"
        },
        "Cheese": {
          "quantity": "30 gms",
          "price": "$0.50"
        },
        "Bagel": {
          "quantity": "70 gms",
          "price": "$1.20"
        }
      },
      "total_price": "$5.50"
    };
    getShopingList(): string[]{
      
    return Object.keys(this.menuItem.ingredients); 
    }
}
