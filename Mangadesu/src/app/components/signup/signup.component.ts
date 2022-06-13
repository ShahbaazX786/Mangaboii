import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  hide:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    })
  }

  onSignup(){
    console.log('uWu');
  }

}
