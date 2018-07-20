import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.newIngredientAdded.subscribe(
      (ingredient: Ingredient) => {
        this.ingredients.push(ingredient);
      }
    );
  }

  onNewIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
