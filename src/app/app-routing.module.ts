import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import {RecipesComponent} from './recipes/recipes.component';


const routes: Routes = [
  { path: 'ingredients', component: IngredientsComponent },
  {path: '', component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
