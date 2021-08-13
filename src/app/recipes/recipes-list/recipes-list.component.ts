import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit   {
  
 recipes:Recipes[] = [
    new Recipes('Lauki Roti Recipe',
    'Detox roti is a combination of atta and vegetable. Full of moisture, lauki helps keep your body hydrated and cool. Try out this lauki roti recipe today',
    'https://c.ndtvimg.com/2021-08/cnmg48f_roti_625x300_09_August_21.jpg'),
     new Recipes('Aloo Poha Recipe',
    'This recipe is as simple as it can get. This is for the lazy days when you wake up late and dont feel like cooking anything. All you need to do is wash some poha, add boiled potatoes along with flavourful spices, mix it together and this simple delicacy is ready to relish!',
    'https://c.ndtvimg.com/2021-08/loudr2go_aloo-poha_625x300_05_August_21.jpg'),
     new Recipes('Paneer tikka toast Recipe',
    'Paneer tikka is one of those dishes that people love to have. This paneer tikka toast will surely be your number one recipe in no time.',
    'https://c.ndtvimg.com/2021-08/4pv9u24_paneer-tikka_625x300_03_August_21.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
