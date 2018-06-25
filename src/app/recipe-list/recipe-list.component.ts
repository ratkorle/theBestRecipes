import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
