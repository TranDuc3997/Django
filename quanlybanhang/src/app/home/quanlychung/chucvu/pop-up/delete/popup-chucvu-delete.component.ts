import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { ChucVu } from "../../../../../_models/chucvu";
import { ChucVuService } from "../../../../../_services/chucvu.service";
import { AlertService } from "../../../../../_services";

@Component({
  selector: "chucvu-delete",
  templateUrl: "./popup-chucvu-delete.component.html"
})
export class ChucVuDeletePopupComponent implements OnInit {
  chucvu: ChucVu;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private chucvuService: ChucVuService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.chucvuService
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
