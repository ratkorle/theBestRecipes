import { Component, Input, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { INGREDIENT } from '../data/mock-ingredients';
import { RecipesService } from '../services/recipes.service';
import { Ingredient } from '../models/ingredients-model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input ()
    detail: Ingredient;

  ingredients = INGREDIENT;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  this.detail = Object.assign({}, this.detail);
  this.detail.quantity = 0;
  }
  addToRecipe() {
    this.recipeService.addIngredient(this.detail);
    alert('Successfully added');
  }
}
