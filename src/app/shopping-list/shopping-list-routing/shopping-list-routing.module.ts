import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from '../shopping-list.component';

const shopping_list_routes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(shopping_list_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule { }
