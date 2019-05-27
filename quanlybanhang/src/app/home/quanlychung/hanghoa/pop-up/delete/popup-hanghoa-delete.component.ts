import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { HangHoa } from "../../../../../_models/hanghoa";
import { HangHoaService } from "../../../../../_services/hanghoa.service";
import { AlertService } from "../../../../../_services";

@Component({
  selector: "hanghoa-delete",
  templateUrl: "./popup-hanghoa-delete.component.html"
})
export class HangHoaDeletePopupComponent implements OnInit {
  hanghoa: HangHoa;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private hanghoaService: HangHoaService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.hanghoaService
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
