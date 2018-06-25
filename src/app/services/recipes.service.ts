
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredients-model';
import { Recipe } from '../models/recipe-model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipesService {
  public newRecipeSubject = new Subject<any>();
  constructor() { }

  addRecipe(data) {
    this.newRecipeSubject.next(data);
  }
  addIngredient(newIngredient: Ingredient) {
    let newRecipe = new Recipe();
    if (window.localStorage && window.localStorage.newRecipe) {
      newRecipe = {...JSON.parse(window.localStorage.newRecipe)};
    }
    newRecipe.recipeIngredients.push(newIngredient);
    window.localStorage.newRecipe = JSON.stringify(newRecipe);
  }
}
