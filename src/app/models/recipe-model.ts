import { Ingredient } from './ingredients-model';

export class Recipe {
 public name: string;
 public source: string;
 public recipeIngredients: Ingredient[];
 public preparationTime: string;
 public instructions: string;




 constructor(name: string, source: string, recipeIngredients: Ingredient[], preparationTime: string, instructions: string ) {
    this.name = name;
    this.source = source;
    this.recipeIngredients = recipeIngredients;
    this.preparationTime = preparationTime;
    this.instructions = instructions;

  }

}
