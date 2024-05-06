import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  DishDetail,
  GetMeal,
  MealDetail,
  MealListDetails,
  NewDish,
  SaveUserMealDetails,
  WeeklyBudget,
} from '@budget-bites/shared/models/meal-detail';
import { UserDetail } from '@budget-bites/shared/models/user-details';
import { CommonService } from '@budget-bites/shared/services/common/common.service';
import { HttpService } from '@budget-bites/shared/services/http-service/http.service';
import { ApiConstant } from '@budget-bites/shared/utilites/app_constant/apiConstant';

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
  userDetail!: UserDetail;
  startDate!: Date;
  endDate!: Date;
  arr!: unknown;
  bool: boolean = false;
  dispStart!: unknown;
  dispEnd!: unknown;
  dispMonth!: string;
  dispArr: number[] = [];
  dates: Date[] = [];
  // dispArrString  : string[] = [];
  dispArrString: {
    dateArr: Date[];
    date: string;
    day: string;
    dateInFullFormat: Date;
    mealDetail: MealDetail;
  }[] = [];
  lastDayOfMonth!: Date;
  nextMonthFirstDay!: Date;
  currentMonth!: number;
  val!: number;
  budgetVal!: number;
  // form = new FormControl();
  favoriteDishList: string[] = ['Apple Pie', 'The Hamburger'];
  url: string = '';
  searchItem: string = '';
  searchArray: string[] = [];
  searchBool: boolean = false;
  saveUserMealDetail!: SaveUserMealDetails;
  addDishMealDetail!: DishDetail;
  weekStart!: Date;
  weekEnd!: Date;
  username!: string;
  mealList: MealListDetails[] = [];
  getMealDet: GetMeal[] = [];
  totalCostOfTheWeek !: number;
  // @ViewChild('myInputField') myInputField!: ElementRef;

  constructor(private datePipe: DatePipe, private httpService: HttpService, private commomService : CommonService) {}
  ngOnInit(): void {
    const userDetail: UserDetail = JSON.parse(localStorage.getItem('userDetail') || "null");
    if(userDetail){
      this.userDetail = userDetail;
    }
    // const user: UserDetail = JSON.parse(
    //   localStorage.getItem('userDetail') || "null"
    // );
    // const username = user.username;
    // user.username!=null ? this.username = user.username : this.username = 'sathiyaseelanmca@gmail.com';
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    this.displayDates(startOfWeek, endOfWeek);
  }

  onEnterPressed(searchInput: HTMLInputElement) {
    console.log(searchInput.value);
    this.searchBool = false;
    this.searchArray = [];
    if (searchInput.value == '') {
      this.searchArray = [];
      this.searchBool = false;
    }
    this.favoriteDishList.forEach((elem) => {
      if (
        elem.toLowerCase().endsWith(searchInput.value.toLowerCase()) ||
        elem.toLowerCase().startsWith(searchInput.value.toLowerCase())
      ) {
        this.searchArray.push(elem);
      }
      this.searchBool = true;
    });
    if (searchInput.value == '') {
      this.searchArray = [];
      this.searchBool = false;
    }
  }
  onSearchInpChange(searchInput: HTMLInputElement) {
    console.log(searchInput.value);
  }

  onBudgetInpChange(event: unknown) {
    console.log(event);
    const a: string =
      this.datePipe.transform(this.startDate, 'yyyy-MM-dd') || '';
    const b: string = this.datePipe.transform(this.endDate, 'yyyy-MM-dd') || '';
    this.httpService
      .post(ApiConstant.addWeeklyBudget, {
        username: this.userDetail.username,
        weekStartDate: a,
        weekEndDate: b,
        budgetAmount: this.val,
      })
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  onInpChange() {
    this.budgetVal = this.val;
  }

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

  nextMonth(): void {
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

  getMonthWeek(date: Date): void {
    // const currentDate = new Date();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    // this.pickMonth(startOfWeek,endOfWeek);
    this.displayDates(startOfWeek, endOfWeek);
  }
  nextWeek() {
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
    this.displayDates(startOfWeek, endOfWeek);
  }
  previousWeek() {
    this.bool = false;
    const startOfWeek = new Date(this.startDate);
    startOfWeek.setDate(startOfWeek.getDate() - 7);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.startDate = startOfWeek;
    this.endDate = endOfWeek;
    // console.log(startOfWeek);
    // console.log(endOfWeek);
    this.displayDates(startOfWeek, endOfWeek);
  }

  displayDates(start: Date, end: Date, lastDate?: Date) {
    this.val = 0;
    this.totalCostOfTheWeek = 0;
    this.dispArr = [];
    this.dispArrString = [];
    const s = this.datePipe.transform(start, 'd MMM');
    const e = this.datePipe.transform(end, 'd MMM');
    const a: string = this.datePipe.transform(start, 'yyyy-MM-dd') || '';
    const b: string = this.datePipe.transform(end, 'yyyy-MM-dd') || '';
    this.httpService
      .post(ApiConstant.getWeeklyBudget, {
        username: this.userDetail.username,
        weekStartDate: a,
        weekEndDate: b,
      })
      .subscribe({
        next: (resp: WeeklyBudget[]) => {
          console.log(resp);
          resp.forEach((d) => {
            this.val = d.budgetAmount;
          });
          // console.log(resp.budgetAmount);
        },
        error: (err) => {
          console.log(err);
        },
      });

    this.dates = this.listDatesInRange(start, end);
    this.dates.forEach((arr) => {
      this.dispArr.push(arr.getDate());
    });

    this.dates.forEach((d) => {
      const dateAndDay = {
        dateArr: this.dates,
        date: this.datePipe.transform(d, 'MMM d') || '',
        day: this.datePipe.transform(d, 'EEE') || '',
        dateInFullFormat: d,
        mealDetail: {
          breakFast: [],
          lunch: [],
          snacks: [],
          dinner: [],
        },
      };
      this.dispArrString.push(dateAndDay);
    });
    // post call to get get dishes
    this.httpService
      .post(ApiConstant.getDishInCalendar, {
        username: this.userDetail.username,
        weekStartDate: a,
        weekEndDate: b,
      })
      .subscribe({
        next: (resp: GetMeal[]) => {
          console.log(
            resp.forEach((elem) => {
              elem.mealListDetails.forEach((d) => {
                console.log(d.mealType);
                this.totalCostOfTheWeek = elem.totalCost
              });
            })
          );
          this.getMealDet = resp;
          console.log(this.getMealDet);
          this.dates.forEach((d) => {
            // const a = this.datePipe.transform(d,'MMM d, EEE');
            // this.dispArrString.push(a || '');

            // const date1 = this.datePipe.transform(d,'MMM d') || '';
            // const date1= this.datePipe.transform(d, 'MMM d') || '';
            const arr = this.getMealDet[0].mealListDetails.filter(function (
              mealDate
            ) {
              const date1 = new Date(mealDate.planDate);
              // console.log(d.getDate(),"d-date1",date1.getDate());
              return d.getDate() == date1.getDate();
            });
            console.log('value of arr', arr);
            // const date1 = new Date(d);
            // date1.setMilliseconds(0);
            // date1.setSeconds(0);
            // date1.setMinutes(0);
            // date1.setHours(0);
            // console.log(date1,"Date1");

            this.getMealDet[0].mealListDetails.forEach((date) => {
              const dateConst = new Date(date.planDate);
              console.log(date.planDate);
              // const dateAndDay = {
              //   dateArr: this.dates,
              //   date: this.datePipe.transform(dateConst, 'MMM d') || '',
              //   day: this.datePipe.transform(dateConst, 'EEE') || '',
              //   dateInFullFormat: d,
              //   mealDetail: {
              //     breakFast: date.mealType=="BreakFast"?date.dishList:[],
              //     lunch: date.mealType=="Lunch"?date.dishList:[],
              //     snacks: date.mealType=="Snacks"?date.dishList:[],
              //     dinner: date.mealType=="Dinner"?date.dishList:[],
              //   },
              // };
              // this.dispArrString.push(dateAndDay);
              let dishListArr : MealDetail = {
                breakFast: [],
                lunch: [],
                snacks: [],
                dinner: [],
              };
              arr.forEach(a=>{
                if (a.mealType.toLowerCase() == "breakfast") {
                  dishListArr.breakFast = a.dishList;
                }
                else if(a.mealType.toLowerCase() == "lunch"){
                  dishListArr.lunch = a.dishList;
                }
                else if(a.mealType.toLowerCase() == "snacks"){
                  dishListArr.snacks = a.dishList;
                }
                else if(a.mealType.toLowerCase() == "dinner"){
                  dishListArr.dinner = a.dishList
                }
              })
              this.dispArrString.forEach((disp) => {
                // const dtConst =
                arr.forEach(a=>{
                  const planDate = new Date(a.planDate);
                  if (disp.dateInFullFormat.getDate() == planDate.getDate()) {
                    disp.mealDetail.breakFast = dishListArr.breakFast;
                    disp.mealDetail.lunch = dishListArr.lunch;
                    disp.mealDetail.snacks = dishListArr.snacks;
                    disp.mealDetail.dinner = dishListArr.dinner;
                  }
                })
                // disp.mealDetail.breakFast =
                //   disp.dateInFullFormat == dateConst ? date.dishList : [];
                // disp.mealDetail.lunch =
                //   disp.dateInFullFormat == dateConst ? date.dishList : [];
                // disp.mealDetail.dinner =
                //   disp.dateInFullFormat == dateConst ? date.dishList : [];
              });
            });

            // })
          });
        },
        error: (err) => {
          console.log(err);
        },
      });

    console.log(this.getMealDet);

    console.log(this.dispArrString);

    this.dispStart = s;
    this.dispEnd = e;
    this.weekStart = start;
    this.weekEnd = end;
    // this.dispMonth = this.datePipe.transform(end,'LLLL') || '';
    // console.log(this.dispMonth + " dispMonth");
    if (start.getDate() < end.getDate()) {
      this.currentMonth = start.getMonth();
      this.dispMonth = this.datePipe.transform(start, 'LLLL') || '';
    } else {
      this.currentMonth = end.getMonth();
      this.dispMonth = this.datePipe.transform(end, 'LLLL') || '';
    }

    this.bool = true;
    console.log(lastDate);
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
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

      if (
        currentMonth === 1 &&
        currentDate.getDate() === 29 &&
        !this.isLeapYear(currentYear)
      ) {
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
  addMoreDish(newDish: NewDish): void {
    const mealDetail= [
      {
        planDate: this.datePipe.transform(newDish.dateToInsert, 'yyyy-MM-dd') || '' ,
        dishName: newDish.dishDetail.dishName,
        isFavourite: String(newDish.dishDetail.isFavorite),
        shortDiscription: newDish.dishDetail.shortDiscription,
        serves: newDish.dishDetail.serves,
        cuisineType: newDish.dishDetail.cuisineType,
        cost: newDish.dishDetail.cost,
        imageUrl:newDish.dishDetail.imageUrl,
      },
    ];
    newDish.dishDetail.cost == undefined ? this.totalCostOfTheWeek=0 : this.totalCostOfTheWeek=this.totalCostOfTheWeek+newDish.dishDetail.cost;

    // const user: UserDetail = JSON.parse(
    //   localStorage.getItem('userDetail') || ''
    // );
    // const username = user.username;
    // this.username = user.username;
    const saveUserMeal = {
      username: this.userDetail.username,
      mealtype: newDish.mealType,
      mealDishList: mealDetail,
    };

    console.log(newDish.dishDetail.cost);
    console.log(saveUserMeal);

    this.httpService.post(ApiConstant.addNewDishInCalendar, saveUserMeal).subscribe({
        next: (response: any) => {
          if(response){
    this.dispArrString.forEach((calendarDay) => {
      if (
        calendarDay.dateInFullFormat.toString() ===
        newDish.dateToInsert.toString()
      ) {
        if (newDish.mealType === 'breakfast') {
          calendarDay.mealDetail.breakFast.push(newDish.dishDetail);
        } else if (newDish.mealType === 'lunch') {
          calendarDay.mealDetail.lunch.push(newDish.dishDetail);
        } else if (newDish.mealType === 'snacks') {
          calendarDay.mealDetail.snacks.push(newDish.dishDetail);
        } else if (newDish.mealType === 'dinner') {
          calendarDay.mealDetail.dinner.push(newDish.dishDetail);
        }
      }
    });
          }
        }
    });
  }

  /**
   * addMoreDish is used to add dish
   * @param dish
   */
  deleteDish(dish: NewDish): void {
    dish.dishDetail.cost == undefined ? this.totalCostOfTheWeek=0 : this.totalCostOfTheWeek=this.totalCostOfTheWeek-dish.dishDetail.cost;
    this.httpService.post(ApiConstant.deleteDishInCalendar, {
      mealPlanID: dish.dishDetail.mealPlanID,
      username: this.userDetail.username
    }).subscribe({
        next: (response: any) => {
          if(response){
    this.dispArrString.forEach((calendarDay) => {
      if (
        calendarDay.dateInFullFormat.toString() === dish.dateToInsert.toString()
      ) {
        if (dish.mealType === 'breakfast') {
          calendarDay.mealDetail.breakFast.splice(
            calendarDay.mealDetail.breakFast.findIndex(
              (breakFast) =>
                breakFast.dishName.toString() ===
                dish.dishDetail.dishName.toString()
            ),
          );
        } else if (dish.mealType === 'lunch') {
          calendarDay.mealDetail.lunch.splice(
            calendarDay.mealDetail.lunch.findIndex(
              (lunch) =>
                lunch.dishName.toString() ===
                dish.dishDetail.dishName.toString()
            ),
            1
          );
        } else if (dish.mealType === 'snacks') {
          calendarDay.mealDetail.snacks.splice(
            calendarDay.mealDetail.snacks.findIndex(
              (snacks) =>
                snacks.dishName.toString() ===
                dish.dishDetail.dishName.toString()
            ),
            1
          );
        } else if (dish.mealType === 'dinner') {
          calendarDay.mealDetail.dinner.splice(
            calendarDay.mealDetail.dinner.findIndex(
              (dinner) =>
                dinner.dishName.toString() ===
                dish.dishDetail.dishName.toString()
            ),
            1
          );
        }
      }
    });
          }
        }
    });
  }
}

// getLastDayOfMonth(): Date {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   console.log(year);

//   // const month = currentDate.getMonth() + 1; // JavaScript months are zero-based
//   const month = currentDate.getMonth() + 1 - this.i + this.j;
//   console.log(month);
//   const m = new Date(year,month);
//   console.log(m.getMonth());
//   const lastDay = new Date(year, month, 0).getDate(); // Setting day to 0 gives the last day of previous month
//   console.log(lastDay);
//   this.lastDayOfMonth = new Date(year, month - 1, lastDay);
//   console.log(this.lastDayOfMonth);
//   this.getMonthWeek(this.lastDayOfMonth);
//   return new Date(year, month - 1, lastDay);

// }

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
