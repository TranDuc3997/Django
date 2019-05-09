import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService, TichXuService } from '../../../../../_services';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatternConstant } from '../../../../../constant/pattern.constants';
import { ChucVu } from '../../../../../_models/chucvu';
import { NhanVienService } from '../../nhanvien.service';
import { create } from 'domain';
import { NhanVien } from '../../../../../_models/nhanvien';
import { ChucVuService } from '../../../../../_services/chucvu.service';
interface Sex {
  text: string,
  value: number
}
@Component({
  selector: 'nhanvien-update',
  templateUrl: './popup-nhanvien-update.component.html'
})
export class NhanVienUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  nhanvien: NhanVien;
  chucvus: ChucVu[];
  createForm: FormGroup;
  public listItems: Array<Sex> = [
    { text: "Nam", value: 1 },
    { text: "Nữ", value: 2 },
    { text: "Khác", value: 3 }
  ];
  constructor(
    public activeModal: NgbActiveModal,
    private nhanVienService: NhanVienService,
    private alertService: AlertService,
    private chucVuService: ChucVuService
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
    this.getChucVu();
  }

  getChucVu() {
    this.chucVuService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.chucvus = data
        },
        error => {
          this.alertService.error(error);
        });
  }
  updateNhanVien() {
    this.nhanVienService.update(this.nhanvien).pipe(first())
      .subscribe(
        data => {
          this.flagUpdate = true;
          this.clear()
        },
        error => {
          this.alertService.error(error);
        });
  }
  onSubmit(){
    this.updateNhanVien();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}