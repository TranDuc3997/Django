import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { KhachHangService } from '../../khachhang.service';
import { KhachHang } from '../../../../../_models/khachang';
import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService, TichXuService } from '../../../../../_services';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatternConstant } from '../../../../../constant/pattern.constants';
import { TichXu } from '../../../../../_models/tichxu';
import { create } from 'domain';

@Component({
  selector: 'khachhang-create',
  templateUrl: './popup-khachhang-create.component.html'
})
export class KhachHangCreatePopupComponent implements OnInit {
  flagCreate = false;
  khachhang = new KhachHang();
  tichxus: TichXu[];
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private khachHangService: KhachHangService,
    private alertService: AlertService,
    private tichXuService: TichXuService
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
    this.getTichXu();
  }

  getTichXu() {
    this.tichXuService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.tichxus = data
        },
        error => {
          this.alertService.error(error);
        });
  }
  createKhachHang() {
    this.khachHangService.create(this.khachhang).pipe(first())
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
    this.createKhachHang();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}