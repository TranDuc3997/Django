import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { PhieuGiaoHang } from "../../../_models/phieugiaohang";
import { PhieuGiaoHangService } from "../../../_services/phieugiaohang.service";
import { PhieuGiaoHangCreatePopupComponent } from "./pop-up/create/popup-phieugiao-create.component";
import { PhieuGiaoHangDeletePopupComponent } from "./pop-up/delete/popup-phieugiao-delete.component";
import { PhieuGiaoHangUpdatePopupComponent } from "./pop-up/update/popup-phieugiao-update.component";

@Component({
  selector: "phieugiao",
  templateUrl: "phieugiao.component.html"
})
export class PhieuGiaoHangComponent implements OnInit {
  phieugiaohang: PhieuGiaoHang[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private phieugiaohangService: PhieuGiaoHangService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListPhieuGiao();
  }

  getListPhieuGiao() {
    this.phieugiaohangService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.phieugiaohang = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(phieugiaohang: PhieuGiaoHang) {
    const modalRef = this.modalService.open(PhieuGiaoHangDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.phieugiaohang = phieugiaohang;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListPhieuGiao();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(PhieuGiaoHangCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListPhieuGiao();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(phieugiaohang: PhieuGiaoHang) {
    const modalRef = this.modalService.open(PhieuGiaoHangUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.phieugiaohang = phieugiaohang;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListPhieuGiao();
          }
        }
      )
      .catch(() => {});
  }
}
