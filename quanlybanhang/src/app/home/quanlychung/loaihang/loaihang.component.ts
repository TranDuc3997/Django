import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { LoaiHangService } from "../../../_services/loaihang.service";
import { LoaiHang } from "../../../_models/loaihang";
import { LoaiHangDeletePopupComponent } from "./pop-up/delete/popup-loaihang-delete.component";
import { LoaiHangCreatePopupComponent } from "./pop-up/create/popup-loaihang-create.component";
import { LoaiHangUpdatePopupComponent } from "./pop-up/update/popup-loaihang-update.component";

@Component({
  selector: "loaihang",
  templateUrl: "loaihang.component.html"
})
export class LoaiHangComponent implements OnInit {
  loaihang: LoaiHang[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private loaihangService: LoaiHangService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListLoaiHang();
  }

  getListLoaiHang() {
    this.loaihangService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.loaihang = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(loaihang: LoaiHang) {
    const modalRef = this.modalService.open(LoaiHangDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.loaihang = loaihang;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListLoaiHang();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(LoaiHangCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListLoaiHang();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(loaihang: LoaiHang) {
    const modalRef = this.modalService.open(LoaiHangUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.loaihang = loaihang;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListLoaiHang();
          }
        }
      )
      .catch(() => {});
  }
}
