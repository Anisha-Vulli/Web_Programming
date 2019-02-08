import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './user.service';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { QuantityComponent } from './cart/quantity/quantity.component';

const routes : Routes = [
  {path : 'signup', component : SignupComponent},
  {path : 'login', component : LoginComponent},
  {path:'cart/:id', component:CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    QuantityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
