import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { create } from 'domain';

@Component({
  selector: 'xx-create',
  templateUrl: './popup-xx-create.component.html'
})
export class XXXCreatePopupComponent implements OnInit {
  flagCreate = false;
  xx = new XXX();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private xxService: XXXService,
    private alertService: AlertService,
  ) { }
  ngOnInit(): void {
    this.createForm = new FormGroup({
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
      diachi: new FormControl('', [Validators.required]),
      ten: new FormControl('', [Validators.required]),
      sdt: new FormControl('', [Validators.required]),
      danhgia: new FormControl('', [Validators.required]),
    });
  }

  createXXX() {
    this.xxService.create(this.xx).pipe(first())
      .subscribe(
        data => {
          this.flagCreate = true;
          this.clear()
        },
        error => {
          this.alertService.error(error);
        });
  }
  onSubmit(){
    this.createXXX();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}