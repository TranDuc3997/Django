import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { HoaDon } from "../../../_models/hoadon";
import { HoaDonService } from "../../../_services/hoadon.service";
import { HoaDonDeletePopupComponent } from "./pop-up/delete/popup-hoadon-delete.component";
import { HoaDonCreatePopupComponent } from "./pop-up/create/popup-hoadon-create.component";
import { HoaDonUpdatePopupComponent } from "./pop-up/update/popup-hoadon-update.component";

@Component({
  selector: "hoadon",
  templateUrl: "hoadon.component.html"
})
export class HoaDonComponent implements OnInit {
  hoadon: HoaDon[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private hoadonService: HoaDonService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListHoaDon();
  }

  getListHoaDon() {
    this.hoadonService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.hoadon = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(hoadon: HoaDon) {
    const modalRef = this.modalService.open(HoaDonDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.hoadon = hoadon;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListHoaDon();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(HoaDonCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListHoaDon();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(hoadon: HoaDon) {
    const modalRef = this.modalService.open(HoaDonUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.hoadon = hoadon;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListHoaDon();
          }
        }
      )
      .catch(() => {});
  }
}
