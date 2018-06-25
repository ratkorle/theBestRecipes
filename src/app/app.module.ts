import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';

import {IngredientsService} from './services/ingredients.service';
import {RecipesService} from './services/recipes.service';


@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IngredientsService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
