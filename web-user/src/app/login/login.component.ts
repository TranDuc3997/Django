import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first, map } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import { PatternConstant } from '../constant/pattern.constants';
import { MessageConstant } from '../constant/message.constants';

@Component({ 
    selector: "login",
    templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

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
          });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    getErrorMessage(code: string) {
        this.submitted = true;
        return (MessageConstant[code]).toString();
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.loginForm.controls.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (data[0])
                        localStorage.setItem('currentUser', JSON.stringify(data[0]));
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
