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
import { ChiTietPhieuNhapKho } from "../../../../../_models/chitietphieunhapkho";
import { ChiTietPhieuNhapKhoService } from "../../../../../_services/chitietphieunhapkho.service";

@Component({
  selector: "chitietphieunhapkho-delete",
  templateUrl: "./popup-chitietphieunhapkho-delete.component.html"
})
export class ChiTietPhieuNhapKhoDeletePopupComponent implements OnInit {
  chitietphieunhapkho: ChiTietPhieuNhapKho;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private chitietphieunhapkhoService: ChiTietPhieuNhapKhoService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.chitietphieunhapkhoService
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
