import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import { AlertComponent } from "../../../../../_directives";
import { AlertService, TichXuService } from "../../../../../_services";
import { TichXu } from "../../../../../_models/tichxu";

@Component({
  selector: "tichxu-delete",
  templateUrl: "./popup-tichxu-delete.component.html"
})
export class TichXuDeletePopupComponent implements OnInit {
  tichxu: TichXu;
  flagDelete = false;
  constructor(
    public activeModal: NgbActiveModal,
    private tichxuService: TichXuService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}

  confirmDelete(id: number) {
    this.tichxuService
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
