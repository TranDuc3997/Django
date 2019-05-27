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
import { LoaiHang } from "../../../../../_models/loaihang";
import { LoaiHangService } from "../../../../../_services/loaihang.service";

@Component({
  selector: "loaihang-delete",
  templateUrl: "./popup-loaihang-delete.component.html"
})
export class LoaiHangDeletePopupComponent implements OnInit {
  loaihang: LoaiHang;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private loaihangService: LoaiHangService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.loaihangService
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
