import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  recipes = [
    new RecipeModel(
      'Test',
      'Test recipe desc',
      'https://i.pinimg.com/236x/47/a5/9e/47a59e948b52a48b34015c0387538294--delicious-breakfast-recipes-delicious-meals.jpg'
    ),
    new RecipeModel(
      'Test',
      'Test recipe desc',
      'https://i.pinimg.com/236x/47/a5/9e/47a59e948b52a48b34015c0387538294--delicious-breakfast-recipes-delicious-meals.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
