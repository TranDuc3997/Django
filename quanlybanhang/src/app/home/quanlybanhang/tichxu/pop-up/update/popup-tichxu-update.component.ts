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
import { TichXu } from "../../../../../_models/tichxu";
import { TichXuService, AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";
import { ParseConstant } from "../../../../../ultil/parse";

@Component({
  selector: "tichxu-update",
  templateUrl: "./popup-tichxu-update.component.html"
})
export class TichXuUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  tichxu: TichXu;
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private tichxuService: TichXuService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.tichxu.ngaybatdautemp = ParseConstant.parseToJsonDate(
      this.tichxu.ngaybatdau
    );
    this.tichxu.ngayketthuctemp = ParseConstant.parseToJsonDate(
      this.tichxu.ngayketthuc
    );
    console.log(this.tichxu.ngaybatdautemp);
    this.createForm = new FormGroup({
      id: new FormControl(""),
      ngaybd: new FormControl("", [Validators.required]),
      ngaykt: new FormControl("", [Validators.required]),
      tile: new FormControl("", [Validators.required])
    });
  }
  updateTichXu() {
    this.tichxuService
      .update(this.tichxu)
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
    this.tichxu.ngaybatdau = ParseConstant.parseToDate(
      this.tichxu.ngaybatdautemp
    );
    this.tichxu.ngayketthuc = ParseConstant.parseToDate(
      this.tichxu.ngayketthuctemp
    );
    this.updateTichXu();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}
