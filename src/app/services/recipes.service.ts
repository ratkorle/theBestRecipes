
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredients-model';
import { Recipe } from '../models/recipe-model';

@Injectable()
export class RecipesService {

  constructor() { }

  addIngredient(newIngredient: Ingredient) {
    let newRecipe: Recipe;
    if (window.localStorage && window.localStorage.newRecipe) {
      newRecipe = JSON.parse(window.localStorage.newRecipe);
    }
    newRecipe.recipeIngredients.push(newIngredient);
    window.localStorage.newRecipe = JSON.stringify(newRecipe);
  }
}
