import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes = [
    new RecipeModel('Test', 'Test recipe desc', './assets/images/recipe-1.jpg'),
    new RecipeModel('Test', 'Test recipe desc', './assets/images/recipe-2.jpg')
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelect(recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
