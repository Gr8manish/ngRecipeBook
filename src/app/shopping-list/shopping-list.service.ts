import {Ingredient} from '../shared/ingredient.model';
import {EventListener} from '@angular/core/src/debug/debug_node';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  newIngredientAdded = new EventEmitter<Ingredient[]>();

  constructor() { }

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Bananas', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.emit(this.ingredients.slice());
  }

}
