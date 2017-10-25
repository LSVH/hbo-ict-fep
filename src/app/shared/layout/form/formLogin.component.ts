import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-login',
  templateUrl: './formLogin.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [AuthenticationService, FormBuilder],
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;
  username: string;
  password: string;

  constructor(private auth: AuthenticationService, @Inject(FormBuilder) private fb: FormBuilder) {
    this.formLogin = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
      ])]
    });
  }

  ngOnInit() {
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.username, this.password);
  }

}
