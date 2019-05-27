import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { NhanVienDeletePopupComponent } from "./pop-up/delete/popup-nhanvien-delete.component";
import { NhanVienCreatePopupComponent } from "./pop-up/create/popup-nhanvien-create.component";
import { NhanVienUpdatePopupComponent } from "./pop-up/update/popup-nhanvien-update.component";
import { NhanVienService } from "./nhanvien.service";
import { NhanVien } from "../../../_models/nhanvien";
import { SexConstant } from "../../../constant/value.constants";

@Component({
  selector: "nhanvien",
  templateUrl: "nhanvien.component.html"
})
export class NhanVienComponent implements OnInit {
  nhanvien: NhanVien[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private nhanVienService: NhanVienService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListNhanVien();
  }
  getListNhanVien() {
    this.nhanVienService
      .getList()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.nhanvien = data;
          this.convertValue();
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(nhanvien: NhanVien) {
    const modalRef = this.modalService.open(NhanVienDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.nhanvien = nhanvien;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListNhanVien();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(NhanVienCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListNhanVien();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(nhanvien: NhanVien) {
    const modalRef = this.modalService.open(NhanVienUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.nhanvien = nhanvien;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListNhanVien();
          }
        }
      )
      .catch(() => {});
  }
  convertValue() {
    this.nhanvien.forEach(nv => {
      nv.gioitinhparse = SexConstant[nv.gioitinh];
    });
  }
}
