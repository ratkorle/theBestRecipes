import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  ingredients = [...INGREDIENT];
  constructor(private recipeService: RecipesService) { }

  @Output()
  addIngredient: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }
  /*onQuantityChange(quantity: number) {
    this.detail.quantity = quantity;
  }*/
  addToRecipe(ingredient) {
    this.recipeService.addIngredient(ingredient);
    this.addIngredient.emit(ingredient);
    alert('Successfully added');
  }
}
