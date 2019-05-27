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
import { HinhThucThanhToan } from "../../../../../_models/hinhthucthanhtoan";
import { HinhThucThanhToanService } from "../../../../../_services/hinhthucthanhtoan.service";

@Component({
  selector: "hinhthucthanhtoan-delete",
  templateUrl: "./popup-hinhthucthanhtoan-delete.component.html"
})
export class HinhThucThanhToanDeletePopupComponent implements OnInit {
  hinhthucthanhtoan: HinhThucThanhToan;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private hinhthucthanhtoanService: HinhThucThanhToanService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.hinhthucthanhtoanService
      .delete(id)
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
