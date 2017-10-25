import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth) {
    this.user = afa.authState;
  }

  createUserWithEmailPassword(username: string, password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(username, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  signInWithEmailAndPassword(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  signOut() {
    return this.afa.auth.signOut();
  }

}
