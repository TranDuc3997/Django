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
import { ChiTietPhieuNhapKho } from "../../../../../_models/chitietphieunhapkho";
import { ChiTietPhieuNhapKhoService } from "../../../../../_services/chitietphieunhapkho.service";
import { AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";

@Component({
  selector: "chitietphieunhapkho-update",
  templateUrl: "./popup-chitietphieunhapkho-update.component.html"
})
export class ChiTietPhieuNhapKhoUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  chitietphieunhapkho: ChiTietPhieuNhapKho;
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private chitietphieunhapkhoService: ChiTietPhieuNhapKhoService,
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
  updateChiTietPhieuNhapKho() {
    this.chitietphieunhapkhoService
      .update(this.chitietphieunhapkho)
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
    this.updateChiTietPhieuNhapKho();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}
