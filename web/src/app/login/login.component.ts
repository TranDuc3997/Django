import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatternConstant } from '../constant/pattern.constants';
import { MessageConstant } from '../constant/message.constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  message: string;
  errorMessage: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  btnSubmit = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(256),
        Validators.pattern(PatternConstant.PATTERN_EMAIL)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(128),
        Validators.pattern(PatternConstant.PATTERN_PASSWORD)
      ]),
      rememberMe: new FormControl()
    });

  }
  getErrorMessage(code: string) {
    this.btnSubmit = true;
    return (MessageConstant[code]).toString();
  }

}
