import { Component, OnInit } from '@angular/core';
import { Items } from '../shared/shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  public items:Items[] = [
    new Items('apple',20),
    new Items('banana',30)
  ]


  constructor() { }

  ngOnInit(): void {
  }

}