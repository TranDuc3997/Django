import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { HinhThucThanhToan } from "../../../_models/hinhthucthanhtoan";
import { HinhThucThanhToanService } from "../../../_services/hinhthucthanhtoan.service";
import { HinhThucThanhToanDeletePopupComponent } from "./pop-up/delete/popup-hinhthucthanhtoan-delete.component";
import { HinhThucThanhToanCreatePopupComponent } from "./pop-up/create/popup-hinhthucthanhtoan-create.component";
import { HinhThucThanhToanUpdatePopupComponent } from "./pop-up/update/popup-hinhthucthanhtoan-update.component";

@Component({
  selector: "hinhthucthanhtoan",
  templateUrl: "hinhthucthanhtoan.component.html"
})
export class HinhThucThanhToanComponent implements OnInit {
  hinhthucthanhtoan: HinhThucThanhToan[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private hinhthucthanhtoanService: HinhThucThanhToanService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListHinhThucThanhToan();
  }

  getListHinhThucThanhToan() {
    this.hinhthucthanhtoanService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.hinhthucthanhtoan = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(hinhthucthanhtoan: HinhThucThanhToan) {
    const modalRef = this.modalService.open(
      HinhThucThanhToanDeletePopupComponent,
      {
        size: "lg",
        centered: true
      }
    );
    modalRef.componentInstance.hinhthucthanhtoan = hinhthucthanhtoan;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListHinhThucThanhToan();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(
      HinhThucThanhToanCreatePopupComponent,
      {
        size: "lg",
        centered: true
      }
    );
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListHinhThucThanhToan();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(hinhthucthanhtoan: HinhThucThanhToan) {
    const modalRef = this.modalService.open(
      HinhThucThanhToanUpdatePopupComponent,
      {
        size: "lg",
        centered: true
      }
    );
    modalRef.componentInstance.hinhthucthanhtoan = hinhthucthanhtoan;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListHinhThucThanhToan();
          }
        }
      )
      .catch(() => {});
  }
}
