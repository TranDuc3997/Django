import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { AlertComponent } from "../../../../../_directives";
import { AlertService } from "../../../../../_services";
import { PhieuGiaoHang } from "../../../../../_models/phieugiaohang";
import { PhieuGiaoHangService } from "../../../../../_services/phieugiaohang.service";

@Component({
  selector: "phieugiao-delete",
  templateUrl: "./popup-phieugiao-delete.component.html"
})
export class PhieuGiaoHangDeletePopupComponent implements OnInit {
  phieugiaohang: PhieuGiaoHang;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private PhieuGiaoService: PhieuGiaoHangService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.PhieuGiaoService.delete(id)
      .pipe(first())
      .subscribe(
        data => {
          this.flagDelete = true;
          this.clear();
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  clear() {
    this.activeModal.dismiss({
      value: this.flagDelete
    });
  }
}
