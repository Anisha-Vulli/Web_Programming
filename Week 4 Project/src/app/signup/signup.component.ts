import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pwdvalidator } from './cnfrmpwdvalidator';
import { Router } from '@angular/router';
import {  UserserviceService } from '../Userservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    user: any;

    constructor(private formBuilder: FormBuilder, private userser: UserserviceService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phnum: ['', [Validators.required, Validators.minLength(10)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cnfrmpwd: ['', [Validators.required, Validators.minLength(6), pwdvalidator]],
            address: ['', [Validators.required]]
        });
        // console.log(pwdvalidator);

        this.registerForm.controls.password.valueChanges.subscribe(
            x => this.registerForm.controls.cnfrmpwd.updateValueAndValidity());
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit(fname, lname, phnum, email, pwd, address) {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.userser.addUser(fname, lname, phnum, email, pwd, address).subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
