import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomato', 5)];
  constructor() {}

  ngOnInit() {}
  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
}
