import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  @Input() recipe: RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>();

  onRecipeSelected() {
    this.recipeSelected.emit();
  }
}
