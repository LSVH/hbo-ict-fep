import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthenticationService]
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {

  }

  isAuthenticated() {
    return AsyncPipe.apply(this.auth.user);
  }

  logout() {
    return this.auth.signOut();
  }

}
