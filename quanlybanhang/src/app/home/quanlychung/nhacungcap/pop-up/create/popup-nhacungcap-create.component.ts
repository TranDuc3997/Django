import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatternConstant } from '../../../../../constant/pattern.constants';
import { create } from 'domain';
import { NhaCungCapService } from '../../../../../_services/nhacungcap.service';
import { NhaCungCap } from '../../../../../_models/nhacungcap';

@Component({
  selector: 'nhacungcap-create',
  templateUrl: './popup-nhacungcap-create.component.html'
})
export class NhaCungCapCreatePopupComponent implements OnInit {
  flagCreate = false;
  nhacungcap = new NhaCungCap();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private nhaCungCapService: NhaCungCapService,
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

  createNhaCungCap() {
    this.nhaCungCapService.create(this.nhacungcap).pipe(first())
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
    this.createNhaCungCap()
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}