import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  newRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    if (window.localStorage && window.localStorage.newRecipe) {
      this.newRecipe = JSON.parse(window.localStorage.newRecipe);
    }
  }

}
