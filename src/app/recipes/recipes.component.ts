import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe-model';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @ViewChild('newRecipeForm') newRecipeForm: NgForm;
  newRecipe = new Recipe();

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    if (window.localStorage && window.localStorage.newRecipe) {
      this.newRecipe = JSON.parse(window.localStorage.newRecipe);
    }
  }
  onCreateRecipe(data) {
    this.recipeService.addRecipe(data);
    this.newRecipeForm.reset();
  }
  onNewAddedIngredient(ingredient) {
    const newRecipeCopy = {...this.newRecipe};
    newRecipeCopy.recipeIngredients.push(ingredient);
    this.newRecipe = {...newRecipeCopy};
  }

  removeIngredient(ind) {
    const newRecipeCopy = {...this.newRecipe};
    newRecipeCopy.recipeIngredients =
      newRecipeCopy.recipeIngredients.filter((ingredient, index) => index !== ind);
    localStorage.setItem('newRecipe', JSON.stringify(newRecipeCopy));
    this.newRecipe = {...newRecipeCopy};
  }
}
