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
import { HoaDon } from "../../../../../_models/hoadon";
import { HoaDonService } from "../../../../../_services/hoadon.service";
import { AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";

@Component({
  selector: "hoadon-create",
  templateUrl: "./popup-hoadon-create.component.html"
})
export class HoaDonCreatePopupComponent implements OnInit {
  flagCreate = false;
  hoadon = new HoaDon();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private hoadonService: HoaDonService,
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

  createHoaDon() {
    this.hoadonService
      .create(this.hoadon)
      .pipe(first())
      .subscribe(
        data => {
          this.flagCreate = true;
          this.clear();
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
  onSubmit() {
    this.createHoaDon();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}
