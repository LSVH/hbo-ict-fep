import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './shared/layout/app/app.component';
import {ButtonComponent} from './shared/element/button/button.component';
import {DatefieldComponent} from './shared/element/datefield/datefield.component';
import {PopupComponent} from './shared/element/popup/popup.component';
import {SelectComponent} from './shared/element/select/select.component';
import {SwitchComponent} from './shared/element/switch/switch.component';
import {TextareaComponent} from './shared/element/textarea/textarea.component';
import {TextfieldComponent} from './shared/element/textfield/textfield.component';
import {FormComponent} from './shared/layout/form/form.component';
import {ListComponent} from './shared/layout/list/list.component';
import {SingleComponent} from './shared/layout/single/single.component';
import {NavComponent} from './shared/layout/nav/nav.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../environments/environment";
import {RouterModule, Routes} from "@angular/router";
import {FormLoginComponent} from "./shared/layout/form/formLogin.component";
import {FormRegisterComponent} from "./shared/layout/form/formRegister.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListProductComponent} from "./shared/layout/list/listProduct.component";

const routes: Routes = [
  {
    path: 'login',
    component: FormLoginComponent,
  },
  {
    path: 'register',
    component: FormRegisterComponent,
  },
  {
    path: 'products',
    component: ListProductComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DatefieldComponent,
    PopupComponent,
    SelectComponent,
    SwitchComponent,
    TextareaComponent,
    TextfieldComponent,
    FormComponent,
    FormLoginComponent,
    FormRegisterComponent,
    ListComponent,
    ListProductComponent,
    SingleComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
