import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-dish-card',
  templateUrl: './add-dish-card.component.html',
  styleUrls: ['./add-dish-card.component.scss']
})
export class AddDishCardComponent implements OnInit {
  
    @Input() dishName:string='dish name';
    @Input() dishImageUrl:string="https://melissasfoodfreedom.com/wp-content/uploads/2023/04/Butter-Chicken-500x500-1.webp";
    @Input() dishPrice:number=0;
    @Output() addButtonClicked: EventEmitter<void> = new EventEmitter<void>();
     @Output() dishServes =new EventEmitter<number>();
   
  addbtton(){
    this.addButtonClicked.emit();
  }
   fontSize='16px';
    addData(){
     console.log('method called');
    }
    numberOutput= new FormControl();
    serves=0;
  constructor() {
    
    //this.dishServes.emit(this.serves);
   } 
   calculateFontSize(dishName: string): object {
    const textLength = dishName.length;
    let fontSize = '12px'; // Default font size

    if (textLength <= 12) {
      fontSize = '13px'; // Adjust font size if dishName length is 20 characters or less
      dishName = dishName.replace(/ /g, '\u00A0\n');    }

    const lineHeight = textLength <= 12 ? '20px' : '12px'; // Adjust line height conditionally
    return {
      'font-size': fontSize,
      'line-height': lineHeight
    };
  }

  ngOnInit() {
  }
  incrementServes(){
    this.serves=this.serves+1;
    console.log( this.serves);
  }
  decrementServes(){
    this.serves=this.serves-1;
    console.log( this.serves);
  }
}
