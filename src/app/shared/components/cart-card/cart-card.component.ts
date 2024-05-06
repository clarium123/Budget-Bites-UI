import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  @Input() itemName: string='item name';
  @Input() price: string='';
  @Input() quantity: string = ''; // Default quantity set to 1
  @Input() imageUrl: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyC4O-baUyS0OU5YlJgDf_1yeRiCRNXC01lnQBPfXsw&s";
  constructor() { }

  ngOnInit() {
  }

}
