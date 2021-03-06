import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;
  constructor() {}
  ngOnInit() {}
}
