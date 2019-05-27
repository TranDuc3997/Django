import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "../../../_services";
import { ChucVuService } from "../../../_services/chucvu.service";
import { ChucVu } from "../../../_models/chucvu";
import { ChucVuDeletePopupComponent } from "./pop-up/delete/popup-chucvu-delete.component";
import { ChucVuCreatePopupComponent } from "./pop-up/create/popup-chucvu-create.component";
import { ChucVuUpdatePopupComponent } from "./pop-up/update/popup-chucvu-update.component";

@Component({
  selector: "chucvu",
  templateUrl: "chucvu.component.html"
})
export class ChucVuComponent implements OnInit {
  chucvu: ChucVu[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private chucvuService: ChucVuService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListChucVu();
  }

  getListChucVu() {
    this.chucvuService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.chucvu = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(chucvu: ChucVu) {
    const modalRef = this.modalService.open(ChucVuDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.chucvu = chucvu;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListChucVu();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(ChucVuCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListChucVu();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(chucvu: ChucVu) {
    const modalRef = this.modalService.open(ChucVuUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.chucvu = chucvu;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListChucVu();
          }
        }
      )
      .catch(() => {});
  }
}
