# ngRecipeShop

###### Created this single page angular website while completing https://www.udemy.com/the-complete-guide-to-angular-2/ course.

###### Course Name : Angular 5 (formerly Angular 2) - The Complete Guide

## What I learned?
- Which architecture Angular uses
- How to use TypeScript to write Angular applications
- All about directives and components, including the creation of custom directives/ components
- How databinding works
- All about routing and handling navigation
- What Pipes are and how to use them
- How to access the Web (e.g. RESTful servers)
- How to use Modules in Angular
- How to optimize your (bigger) Angular Application


## How to run this project ?
- install NodeJS
- Replace firebase apiKey and authDomain with yours in app.component.ts file which looks like this :
    ```sh
    ngOnInit() {
        firebase.initializeApp({
          apiKey: 'AIzaSyAFxMVmGLEHGZ0cDlEMEaHAz8sxmw1CCxs',
          authDomain: 'ng-recipe-book-45a26.firebaseapp.com',
        });
      }
    ```
- Then run following command :
    ```sh
    ng serve
    ```
- Go to http://localhost:4200/ URL
