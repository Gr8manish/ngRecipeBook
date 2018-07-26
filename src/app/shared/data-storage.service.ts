import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const tk = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-45a26.firebaseio.com/recipes.json?auth=' + tk, this.recipeService.getRecipes());
  }

  getRecipes() {
    const tk = this.authService.getToken();

    this.http.get('https://ng-recipe-book-45a26.firebaseio.com/recipes.json?auth=' + tk)
      .pipe(
        map(
          (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [] ;
              }
            }
            return recipes;
          }
        )
      )
      .subscribe(
        (recipes: Recipe[]) => {
          console.log(recipes);
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
