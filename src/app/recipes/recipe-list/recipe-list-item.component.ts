import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../shared';

@Component({
  selector: 'rb-recipe-list-item',
  templateUrl: './recipe-list-item.component.html'
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
