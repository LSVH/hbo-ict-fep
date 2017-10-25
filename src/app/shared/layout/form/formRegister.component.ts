import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-register',
  templateUrl: './formRegister.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [AuthenticationService, FormBuilder],
})
export class FormRegisterComponent implements OnInit {
  domains: string[] = [
    'hu.nl',
    'student.hu.nl'
  ];
  formRegister: FormGroup;

  constructor(private auth: AuthenticationService, @Inject(FormBuilder) private fb: FormBuilder) {
    this.formRegister = fb.group({
      username: fb.group({
        account: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z]+[.][A-Za-z]+$'),
        ])],
        domain: ['', Validators.required],
      }),
      studentNumber: [''],
      firstName: [''],
      lastName: [''],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
      ])]
    });

    this.formRegister.valueChanges.subscribe(data => this.onFormChange(data));
  }

  onFormChange(data: any) {
    if (data.username.domain == 1) {
      this.formRegister.controls.studentNumber.setValidators(Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.min(0),
      ]));
    }

    let acc = data.username.account,
      seperator = acc.indexOf('\.'),
      fName = seperator > 0 ? acc.substr(0, seperator) : acc,
      lName = seperator > 0 ? acc.substr(seperator+1) : '';
    if (fName.toLowerCase() != data.firstName.toLowerCase()) {
      this.formRegister.controls.firstName.setValue(fName.charAt(0).toUpperCase() + fName.substr(1));
    }
    if (lName.toLowerCase() != data.lastName.toLowerCase()) {
      this.formRegister.controls.lastName.setValue(lName.charAt(0).toUpperCase() + lName.substr(1));
    }
  }

  showValidation(e) {
    let node = null,
      nodes = e.target.parentElement.parentElement.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].className == 'validation') {
        node = nodes[i];
        break;
      }
    }
    node.className += ' active';
  }

  hideValidation(e) {
    let node = null,
      nodes = e.target.parentElement.parentElement.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].className == 'validation active') {
        node = nodes[i];
        break;
      }
    }
    node.classList.remove('active');
  }

  register() {
    let username = this.formRegister.get('username').value,
        password = this.formRegister.get('password').value;
    this.auth.createUserWithEmailPassword(username, password);
  }

  ngOnInit() {
  }

}
