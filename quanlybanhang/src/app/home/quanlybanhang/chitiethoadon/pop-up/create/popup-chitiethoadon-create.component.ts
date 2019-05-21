import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { create } from 'domain';
import { ChiTietHoaDon } from '../../../../../_models/chitiethoadon';
import { ChiTietHoaDonService } from '../../../../../_services/chitiethoadon.service';
import { AlertService } from '../../../../../_services';
import { PatternConstant } from '../../../../../constant/pattern.constants';

@Component({
  selector: 'chitiethoadon-create',
  templateUrl: './popup-chitiethoadon-create.component.html'
})
export class ChiTietHoaDonCreatePopupComponent implements OnInit {
  flagCreate = false;
  chitiethoadon = new ChiTietHoaDon();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private chitiethoadonService: ChiTietHoaDonService,
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

  createChiTietHoaDon() {
    this.chitiethoadonService.create(this.chitiethoadon).pipe(first())
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
    this.createChiTietHoaDon();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}