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
  selector: "tichxu-create",
  templateUrl: "./popup-tichxu-create.component.html"
})
export class TichXuCreatePopupComponent implements OnInit {
  flagCreate = false;
  tichxu = new TichXu();
  abc: Date;
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private tichxuService: TichXuService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.createForm = new FormGroup({
      ngaybd: new FormControl("", [Validators.required]),
      ngaykt: new FormControl("", [Validators.required]),
      tile: new FormControl("", [Validators.required])
    });
  }

  createTichXu() {
    this.tichxuService
      .create(this.tichxu)
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
    this.tichxu.ngaybatdau = ParseConstant.parseToDate(this.tichxu.ngaybatdau);
    this.tichxu.ngayketthuc = ParseConstant.parseToDate(
      this.tichxu.ngayketthuc
    );
    this.createTichXu();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}
