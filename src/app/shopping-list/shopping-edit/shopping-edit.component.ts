import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  isEditMode = false;
  editItemIndex: number;
  subscription: Subscription;
  editItem: Ingredient;

  @ViewChild('f') editForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.isEditMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);

        this.editForm.setValue({
          'name': this.editItem.name,
          'amount': this.editItem.count
        });
      }
    );
  }

  onAddButtonClick(form: NgForm) {
    const ingName = form.value.name;
    const ingAmount = form.value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.isEditMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addNewIngredient(newIngredient);
    }

    this.isEditMode = false;
    this.editForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.editForm.reset();
    this.isEditMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
