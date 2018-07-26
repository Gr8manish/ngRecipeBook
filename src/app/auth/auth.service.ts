import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  onSignup(email, password) {

    console.log(email, password);

    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  onSignin(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.getToken();
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
