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
  selector: "loaihang-create",
  templateUrl: "./popup-loaihang-create.component.html"
})
export class LoaiHangCreatePopupComponent implements OnInit {
  flagCreate = false;
  loaihang = new LoaiHang();
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private loaihangService: LoaiHangService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.createForm = new FormGroup({
      ten: new FormControl("", [Validators.required])
    });
  }

  createLoaiHang() {
    this.loaihangService
      .create(this.loaihang)
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
    this.createLoaiHang();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}
