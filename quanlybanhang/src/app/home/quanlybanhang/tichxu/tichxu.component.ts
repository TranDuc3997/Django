import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService, TichXuService } from "../../../_services";
import { TichXu } from "../../../_models/tichxu";
import { TichXuDeletePopupComponent } from "./pop-up/delete/popup-tichxu-delete.component";
import { TichXuCreatePopupComponent } from "./pop-up/create/popup-tichxu-create.component";
import { TichXuUpdatePopupComponent } from "./pop-up/update/popup-tichxu-update.component";

@Component({
  selector: "tichxu",
  templateUrl: "tichxu.component.html"
})
export class TichXuComponent implements OnInit {
  tichxu: TichXu[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private tichxuService: TichXuService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.getListTichXu();
  }

  getListTichXu() {
    this.tichxuService
      .getAll()
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data)
          this.tichxu = data;
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  openDelete(tichxu: TichXu) {
    const modalRef = this.modalService.open(TichXuDeletePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.tichxu = tichxu;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListTichXu();
          }
        }
      )
      .catch(() => {});
  }
  openCreate() {
    const modalRef = this.modalService.open(TichXuCreatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListTichXu();
          }
        }
      )
      .catch(() => {});
  }
  openUpdate(tichxu: TichXu) {
    const modalRef = this.modalService.open(TichXuUpdatePopupComponent, {
      size: "lg",
      centered: true
    });
    modalRef.componentInstance.tichxu = tichxu;
    modalRef.result
      .then(
        result => {},
        reason => {
          if (reason.value) {
            // update value for page
            this.getListTichXu();
          }
        }
      )
      .catch(() => {});
  }
}
