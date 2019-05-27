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
import { LoaiHang } from "../../../../../_models/loaihang";
import { LoaiHangService } from "../../../../../_services/loaihang.service";
import { AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";

@Component({
  selector: "loaihang-update",
  templateUrl: "./popup-loaihang-update.component.html"
})
export class LoaiHangUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  loaihang: LoaiHang;
  updateForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private loaihangService: LoaiHangService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(""),
      ten: new FormControl("", [Validators.required])
    });
  }
  updateLoaiHang() {
    this.loaihangService
      .update(this.loaihang)
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
    this.updateLoaiHang();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}
