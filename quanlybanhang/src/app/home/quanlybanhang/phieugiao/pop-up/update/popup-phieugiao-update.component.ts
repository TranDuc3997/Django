import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { create } from "domain";
import { AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";
import { PhieuGiaoHang } from "../../../../../_models/phieugiaohang";
import { PhieuGiaoHangService } from "../../../../../_services/phieugiaohang.service";

@Component({
  selector: "phieugiao-update",
  templateUrl: "./popup-phieugiao-update.component.html"
})
export class PhieuGiaoHangUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  phieugiaohang: PhieuGiaoHang;
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private phieugiaohangService: PhieuGiaoHangService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.createForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.maxLength(256),
        Validators.pattern(PatternConstant.PATTERN_EMAIL)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(128),
        Validators.pattern(PatternConstant.PATTERN_PASSWORD)
      ]),
      diachi: new FormControl("", [Validators.required]),
      ten: new FormControl("", [Validators.required]),
      sdt: new FormControl("", [Validators.required]),
      danhgia: new FormControl("", [Validators.required])
    });
  }
  updatePhieuGiao() {
    this.phieugiaohangService
      .update(this.phieugiaohang)
      .pipe(first())
      .subscribe(
        data => {
          this.flagUpdate = true;
          this.clear();
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
  onSubmit() {
    this.updatePhieuGiao();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}
