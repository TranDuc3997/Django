import { AlertService } from "../../../_services";
import { ChiTietPhieuNhapKho } from "../../../_models/chitietphieunhapkho";
import { ChiTietPhieuNhapKhoService } from "../../../_services/chitietphieunhapkho.service";
import { ChiTietPhieuNhapKhoDeletePopupComponent } from "./pop-up/delete/popup-chitietphieunhapkho-delete.component";
import { ChiTietPhieuNhapKhoCreatePopupComponent } from "./pop-up/create/popup-chitietphieunhapkho-create.component";
import { ChiTietPhieuNhapKhoUpdatePopupComponent } from "./pop-up/update/popup-chitietphieunhapkho-update.component";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { first } from "rxjs/operators";

@Component({
  selector: "chitietphieunhapkho",
  templateUrl: "chitietphieunhapkho.component.html"
})
export class ChiTietPhieuNhapKhoComponent implements OnInit {
  chitietphieunhapkho: ChiTietPhieuNhapKho[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private chitietphieunhapkhoService: ChiTietPhieuNhapKhoService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListChiTietPhieuNhapKho();
  }

  getListChiTietPhieuNhapKho() {
    this.chitietphieunhapkhoService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.chitietphieunhapkho = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(chitietphieunhapkho: ChiTietPhieuNhapKho) {
    const modalRef = this.modalService.open(
      ChiTietPhieuNhapKhoDeletePopupComponent,
      {
        size: "lg",
        centered: true
      }
    );
    modalRef.componentInstance.chitietphieunhapkho = chitietphieunhapkho;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListChiTietPhieuNhapKho();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(
      ChiTietPhieuNhapKhoCreatePopupComponent,
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
            this.getListChiTietPhieuNhapKho();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(chitietphieunhapkho: ChiTietPhieuNhapKho) {
    const modalRef = this.modalService.open(
      ChiTietPhieuNhapKhoUpdatePopupComponent,
      {
        size: "lg",
        centered: true
      }
    );
    modalRef.componentInstance.chitietphieunhapkho = chitietphieunhapkho;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListChiTietPhieuNhapKho();
          }
        }
      )
      .catch(() => {});
  }
}
