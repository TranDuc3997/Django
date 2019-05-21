import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { create } from 'domain';
import { PhieuNhapKho } from '../../../../../_models/phieunhapkho';
import { PhieuNhapKhoService } from '../../../../../_services/phieunhapkho.service';
import { AlertService } from '../../../../../_services';
import { PatternConstant } from '../../../../../constant/pattern.constants';

@Component({
  selector: 'phieunhapkho-create',
  templateUrl: './popup-phieunhapkho-create.component.html'
})
export class PhieuNhapKhoCreatePopupComponent implements OnInit {
  flagCreate = false;
  phieunhapkho = new PhieuNhapKho();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private phieunhapkhoService: PhieuNhapKhoService,
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

  createPhieuNhapKho() {
    this.phieunhapkhoService.create(this.phieunhapkho).pipe(first())
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
    this.createPhieuNhapKho();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}