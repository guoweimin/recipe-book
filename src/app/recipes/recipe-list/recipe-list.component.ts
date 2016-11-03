import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../shared';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://blog.besserhaushalten.de/wp-content/uploads/2012/10/19491031.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://www.skinnykitchen.com/wp-content/uploads/2013/04/Greek-chicken-spinach-salad2.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
