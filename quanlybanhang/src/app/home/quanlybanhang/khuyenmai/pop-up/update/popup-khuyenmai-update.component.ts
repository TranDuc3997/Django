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
import { KhuyenMai } from "../../../../../_models/khuyenmai";
import { KhuyenMaiService } from "../../../../../_services/khuyenmai.service";
import { AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";

@Component({
  selector: "khuyenmai-update",
  templateUrl: "./popup-khuyenmai-update.component.html"
})
export class KhuyenMaiUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  khuyenmai: KhuyenMai;
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private khuyenmaiService: KhuyenMaiService,
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
  updateKhuyenMai() {
    this.khuyenmaiService
      .update(this.khuyenmai)
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
    this.updateKhuyenMai();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}
