import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../shared';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.recipeService.fetchData();
    // this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.router.navigate(['/']);
      }
    )
  }
}
