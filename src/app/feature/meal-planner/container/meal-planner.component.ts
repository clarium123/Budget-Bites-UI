import { DatePipe } from '@angular/common';
import { Component, OnInit,  } from '@angular/core';
import { MealDetail, NewDish } from '@budget-bites/shared/models/meal-detail';
import { HttpService } from '@budget-bites/shared/services/http-service/http.service';
import { ApiConstant } from '@budget-bites/shared/utilites/app_constant/apiConstant';
// import { FormBuilder, FormControl } from '@angular/forms';
// import { log } from 'console';
// numberAttribute
// import {Observable, Observer} from 'rxjs';


export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'budget-bites-meal-planner',
  templateUrl: './meal-planner.component.html',
  styleUrl: './meal-planner.component.scss',

})
export class MealPlannerComponent implements OnInit {
startDate !: Date;
endDate !: Date;
arr !:unknown;
bool : boolean = false;
dispStart !: unknown;
dispEnd !: unknown;
dispMonth !: string;
dispArr :number[] = [];
dates :Date[] = [];
// dispArrString  : string[] = [];
dispArrString  : {
  date: string,
  day: string,
  dateInFullFormat: Date,
  mealDetail: MealDetail
}[] = [];
lastDayOfMonth !: Date;
i : number = 0;
j : number = 0;
nextMonthFirstDay !: Date;
currentMonth !: number;
val !: number ;
budgetVal !: number;
// form = new FormControl();
favoriteDishList: string[] = ["Tandoori Chicken", "Briyani"]




  constructor(private datePipe : DatePipe,  private httpService: HttpService) {

  }
  ngOnInit(): void {
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    // console.log(startOfWeek);
    // console.log(endOfWeek);
    // const lastDate = this.getLastDayOfMonth();
    // console.log(lastDate); 
    // this.getMonthWeek(lastDate);
    // this.currentMonth = endOfWeek.getMonth();
    // this.pickMonth(startOfWeek,endOfWeek);
    this.displayDates(startOfWeek,endOfWeek);
    // this.form = this.formControl.addValidators({''
    // })

    // this.bool = true;
  }

  // pickMonth(start : Date, end : Date){
  //   console.log(start);
  //   console.log(end);
  //   if (start.getDate() < end.getDate()) {
  //     this.currentMonth = start.getMonth();
  //     this.dispMonth = this.datePipe.transform(start,'LLLL') || '';
  //   }   
    
  //   else{
  //     this.currentMonth = end.getMonth();
  //     this.dispMonth = this.datePipe.transform(end,'LLLL') || '';      
  //   }
  // }

  onInpChange(){
    
    this.budgetVal = this.val;
  }

  displayMonth(){}

  getLastDayOfMonth(): Date {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    console.log(year);
   
    // const month = currentDate.getMonth() + 1; // JavaScript months are zero-based
    const month = currentDate.getMonth() + 1 - this.i + this.j;
    console.log(month);
    const m = new Date(year,month);
    console.log(m.getMonth());
    const lastDay = new Date(year, month, 0).getDate(); // Setting day to 0 gives the last day of previous month
    console.log(lastDay);
    this.lastDayOfMonth = new Date(year, month - 1, lastDay);
    console.log(this.lastDayOfMonth);
    this.getMonthWeek(this.lastDayOfMonth);
    return new Date(year, month - 1, lastDay);
   
  }

  // getFirstDayOfNextMonth() : void {
  //   const currentDate = new Date();
  //   const nextMonth = currentDate.getMonth() + 1 - this.i + this.j;
  //   const year = currentDate.getFullYear();

  //   // If the next month is December, increment the year
  //   const nextMonthYear = nextMonth === 12 ? year + 1 : year;

  //   // Set the date to the first day of the next month
  //   this.nextMonthFirstDay = new Date(nextMonthYear, nextMonth % 12, 1);
  //   this.getMonthWeek(this.nextMonthFirstDay);
  // }

  previousMonth(): void {
    // this.i  = this.currentMonth - 1;
    // this.getFirstDayOfNextMonth();
    const currentDate = new Date();
    // const nextMonth = currentDate.getMonth() + 1;
    this.currentMonth = this.currentMonth - 1;
    // const currentMonth = this.currentMonth + 1;
    const year = currentDate.getFullYear();

    // If the next month is December, increment the year
    const nextMonthYear = this.currentMonth === 12 ? year + 1 : year;

    // Set the date to the first day of the next month
    this.nextMonthFirstDay = new Date(nextMonthYear, this.currentMonth % 12, 1);
    this.getMonthWeek(this.nextMonthFirstDay);
  }

  nextMonth() : void {
    // this.j = this.currentMonth + 1;
    // this.getFirstDayOfNextMonth();
    const currentDate = new Date();
    // const nextMonth = currentDate.getMonth() + 1;
    this.currentMonth = this.currentMonth + 1;
    // const currentMonth = this.currentMonth + 1;
    const year = currentDate.getFullYear();
    console.log(year);  
    

    // If the next month is December, increment the year
    const nextMonthYear = this.currentMonth === 12 ? year + 1 : year;

    // Set the date to the first day of the next month
    this.nextMonthFirstDay = new Date(nextMonthYear, this.currentMonth % 12, 1);
    this.getMonthWeek(this.nextMonthFirstDay);
  }

  getMonthWeek(date : Date) : void {
    // const currentDate = new Date();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    // this.pickMonth(startOfWeek,endOfWeek);
    this.displayDates(startOfWeek,endOfWeek);
  }
  nextWeek(){
    this.bool = false;
    // const currentDate = new Date();
    const startOfWeek = new Date(this.endDate);
    startOfWeek.setDate(startOfWeek.getDate() + 1);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    // console.log(startOfWeek);
    // console.log(endOfWeek);
    this.displayDates(startOfWeek,endOfWeek);
  }
  previousWeek(){
    this.bool = false;
    const startOfWeek = new Date(this.startDate);
    startOfWeek.setDate(startOfWeek.getDate()-7);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    // console.log(startOfWeek);
    // console.log(endOfWeek);
    this.displayDates(startOfWeek,endOfWeek);
  }

  displayDates(start : Date, end : Date, lastDate ?: Date){
    this.dispArr = [];
    this.dispArrString = [];
    const s = this.datePipe.transform(start,'d MMM');
    const e = this.datePipe.transform(end,'d MMM');
    // console.log(s);
    // console.log(e);
    this.dates = this.listDatesInRange(start,end);
    this.dates.forEach(arr=>{
      this.dispArr.push(arr.getDate());
    })
    this.dates.forEach(d =>{
      // const a = this.datePipe.transform(d,'MMM d, EEE');
      // this.dispArrString.push(a || '');
      const dateAndDay = {
        date: this.datePipe.transform(d,'MMM d') || '',
        day: this.datePipe.transform(d,'EEE') || '',
        dateInFullFormat: d,
        mealDetail: {
          breakFast: [
          ],
          lunch: [
          ],
          snacks: [
          ],
          dinner: [
          ]
        }
      }
      this.dispArrString.push(dateAndDay);
    })
    this.dispStart  = s;
    this.dispEnd = e;
    // this.dispMonth = this.datePipe.transform(end,'LLLL') || '';
    // console.log(this.dispMonth + " dispMonth");
    if (start.getDate() < end.getDate()) {
      this.currentMonth = start.getMonth();
      this.dispMonth = this.datePipe.transform(start,'LLLL') || '';
    }   
    
    else{
      this.currentMonth = end.getMonth();
      this.dispMonth = this.datePipe.transform(end,'LLLL') || '';      
    }
    
    this.bool = true;
    console.log(lastDate);
  }


  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  listDatesInRange(startDate: Date, endDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);

        // Check if we need to handle leap years or month transitions
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        // console.log(currentMonth)

        if (currentMonth === 1 && currentDate.getDate() === 29 && !this.isLeapYear(currentYear)) {
            // If it's February 29th in a non-leap year, move to March 1st
            currentDate.setDate(1);
            currentDate.setMonth(currentMonth + 1);
        }
    }

    return dates;
}
/**
 * addMoreDish is used to add dish
 * @param newDish 
 */
addMoreDish(newDish: NewDish): void{
  // this.httpService.post(ApiConstant.addNewDishInCalendar, newDish).subscribe({
  //     next: (response: any) => {
  //       if(response){
          this.dispArrString.forEach((calendarDay) => {
            if(calendarDay.dateInFullFormat.toString() === newDish.dateToInsert.toString()){   
              if(newDish.mealType === "breakfast"){ 
                calendarDay.mealDetail.breakFast.push(newDish.dishDetail);
              }
              else if(newDish.mealType === "lunch"){
                calendarDay.mealDetail.lunch.push(newDish.dishDetail);
              }
              else if(newDish.mealType === "snacks"){
                calendarDay.mealDetail.snacks.push(newDish.dishDetail);
              }
              else if(newDish.mealType === "dinner"){
                calendarDay.mealDetail.dinner.push(newDish.dishDetail);
              }
            }
          })
  //       }
  //     }
  // });
  
}

/**
 * addMoreDish is used to add dish
 * @param dish 
 */
deleteDish(dish: NewDish): void{
  // this.httpService.deleteUsingPayload(ApiConstant.deleteDishInCalendar, newDish).subscribe({
  //     next: (response: any) => {
  //       if(response){
          this.dispArrString.forEach((calendarDay) => {
            if(calendarDay.dateInFullFormat.toString() === dish.dateToInsert.toString()){   
              if(dish.mealType === "breakfast"){ 
                calendarDay.mealDetail.breakFast.splice(
                  calendarDay.mealDetail.breakFast.findIndex(breakFast => breakFast.dishName.toString() === dish.dishDetail.dishName.toString())
                  , 1);
              }
              else if(dish.mealType === "lunch"){
                calendarDay.mealDetail.lunch.splice(
                  calendarDay.mealDetail.lunch.findIndex(lunch => lunch.dishName.toString() === dish.dishDetail.dishName.toString())
                  , 1);              }
              else if(dish.mealType === "snacks"){
                calendarDay.mealDetail.snacks.splice(
                  calendarDay.mealDetail.snacks.findIndex(snacks => snacks.dishName.toString() === dish.dishDetail.dishName.toString())
                  , 1);              }
              else if(dish.mealType === "dinner"){
                calendarDay.mealDetail.dinner.splice(
                  calendarDay.mealDetail.dinner.findIndex(dinner => dinner.dishName.toString() === dish.dishDetail.dishName.toString())
                  , 1);              }
            }
          })
  //       }
  //     }
  // });
  
}


}
