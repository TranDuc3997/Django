import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { KhuyenMai } from "../../../_models/khuyenmai";
import { KhuyenMaiService } from "../../../_services/khuyenmai.service";
import { KhuyenMaiDeletePopupComponent } from "./pop-up/delete/popup-khuyenmai-delete.component";
import { KhuyenMaiCreatePopupComponent } from "./pop-up/create/popup-khuyenmai-create.component";
import { KhuyenMaiUpdatePopupComponent } from "./pop-up/update/popup-khuyenmai-update.component";
import { IMAGE_URL } from "../../../app.constants";

@Component({
  selector: "khuyenmai",
  templateUrl: "khuyenmai.component.html"
})
export class KhuyenMaiComponent implements OnInit {
  khuyenmai: KhuyenMai[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private khuyenmaiService: KhuyenMaiService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListKhuyenMai();
  }

  getListKhuyenMai() {
    this.khuyenmaiService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.khuyenmai = data;
          this.parseUrlImage();
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
  parseUrlImage() {
    this.khuyenmai.forEach(km => {
      km.hinhanhtemp = IMAGE_URL + km.hinhanh;
    });
  }
  openDelete(khuyenmai: KhuyenMai) {
    const modalRef = this.modalService.open(KhuyenMaiDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.khuyenmai = khuyenmai;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListKhuyenMai();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(KhuyenMaiCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListKhuyenMai();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(khuyenmai: KhuyenMai) {
    const modalRef = this.modalService.open(KhuyenMaiUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.khuyenmai = khuyenmai;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListKhuyenMai();
          }
        }
      )
      .catch(() => {});
  }
}
