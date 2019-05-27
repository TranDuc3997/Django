import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { AlertComponent } from "../../../../../_directives";
import { AlertService, TichXuService } from "../../../../../_services";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { PatternConstant } from "../../../../../constant/pattern.constants";
import { create } from "domain";
import { NhaCungCap } from "../../../../../_models/nhacungcap";
import { NhaCungCapService } from "../../../../../_services/nhacungcap.service";

@Component({
  selector: "nhacungcap-update",
  templateUrl: "./popup-nhacungcap-update.component.html"
})
export class NhaCungCapUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  nhacungcap: NhaCungCap;
  updateFrom: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private nhaCungCapService: NhaCungCapService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.updateFrom = new FormGroup({
      id: new FormControl(""),
      email: new FormControl("", [
        Validators.required,
        Validators.maxLength(256),
        Validators.pattern(PatternConstant.PATTERN_EMAIL)
      ]),
      sdt: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
        Validators.pattern(PatternConstant.PATTERN_NUMBER_ONLY)
      ]),
      diachi: new FormControl("", [Validators.required]),
      ten: new FormControl("", [Validators.required])
    });
  }
  updateNhaCungCap() {
    this.nhaCungCapService
      .update(this.nhacungcap)
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
    this.updateNhaCungCap();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}
