import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

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
  
  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put("https://recipebook-c184f.firebaseio.com/recipes.json", body, {headers: headers});
  }

  fetchData() {
    this.http.get("https://recipebook-c184f.firebaseio.com/recipes.json")
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      )
  }
}
