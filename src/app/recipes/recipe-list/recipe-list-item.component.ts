import { Component, Input } from '@angular/core';

import { Recipe } from '../../shared';

@Component({
  selector: 'rb-recipe-list-item',
  templateUrl: './recipe-list-item.component.html'
})
export class RecipeListItemComponent{

  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
