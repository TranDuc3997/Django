import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { create } from 'domain';
import { PhieuXuat } from '../../../../../_models/phieuxuatkho';
import { AlertService } from '../../../../../_services';
import { PatternConstant } from '../../../../../constant/pattern.constants';
import { PhieuXuatService } from '../../../../../_services/phieuxuatkho.service';

@Component({
  selector: 'phieuxuat-create',
  templateUrl: './popup-phieuxuat-create.component.html'
})
export class PhieuXuatCreatePopupComponent implements OnInit {
  flagCreate = false;
  phieuxuat = new PhieuXuat();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private phieuxuatService: PhieuXuatService,
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

  createPhieuXuat() {
    this.phieuxuatService.create(this.phieuxuat).pipe(first())
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
    this.createPhieuXuat();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}