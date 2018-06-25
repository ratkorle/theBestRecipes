import { Ingredient } from './ingredients-model';

export class Recipe {
 public name: string;
 public source: string;
 public recipeIngredients: Ingredient[];
 public preparationHours: string;
 public preparationMins: string;
 public instructions: string;




 constructor(name: string, source: string, recipeIngredients: Ingredient[] = [], preparationHours: string, preparationMins, instructions: string ) {
    this.name = name;
    this.source = source;
    this.recipeIngredients = recipeIngredients;
    this.preparationHours = preparationHours;
    this.preparationMins = preparationMins;
    this.instructions = instructions;

  }

}
