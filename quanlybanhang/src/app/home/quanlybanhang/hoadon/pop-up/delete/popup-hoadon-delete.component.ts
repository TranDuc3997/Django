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
import { HoaDon } from "../../../../../_models/hoadon";
import { HoaDonService } from "../../../../../_services/hoadon.service";

@Component({
  selector: "hoadon-delete",
  templateUrl: "./popup-hoadon-delete.component.html"
})
export class HoaDonDeletePopupComponent implements OnInit {
  hoadon: HoaDon;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private hoadonService: HoaDonService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.hoadonService
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
