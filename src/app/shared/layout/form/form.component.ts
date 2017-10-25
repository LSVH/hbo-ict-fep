import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [AuthenticationService],
})
export class FormComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.auth.createUserWithEmailPassword(this.username, this.password);
    this.username = this.password = '';
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.username, this.password);
    this.username = this.password = '';
  }

}
