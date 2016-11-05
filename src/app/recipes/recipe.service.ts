import { Injectable } from '@angular/core';

import { Recipe } from '../shared';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://blog.besserhaushalten.de/wp-content/uploads/2012/10/19491031.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.skinnykitchen.com/wp-content/uploads/2013/04/Greek-chicken-spinach-salad2.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
