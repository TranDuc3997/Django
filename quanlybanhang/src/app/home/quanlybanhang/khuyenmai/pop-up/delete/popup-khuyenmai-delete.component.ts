import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { AlertComponent } from "../../../../../_directives";
import { AlertService } from "../../../../../_services";
import { KhuyenMai } from "../../../../../_models/khuyenmai";
import { KhuyenMaiService } from "../../../../../_services/khuyenmai.service";

@Component({
  selector: "khuyenmai-delete",
  templateUrl: "./popup-khuyenmai-delete.component.html"
})
export class KhuyenMaiDeletePopupComponent implements OnInit {
  khuyenmai: KhuyenMai;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private khuyenmaiService: KhuyenMaiService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.khuyenmaiService
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
