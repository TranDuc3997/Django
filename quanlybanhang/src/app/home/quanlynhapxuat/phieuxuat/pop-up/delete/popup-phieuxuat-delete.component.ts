import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { PhieuXuat } from '../../../../../_models/phieuxuatkho';
import { PhieuXuatService } from '../../../../../_services/phieuxuatkho.service';

@Component({
    selector: 'phieuxuat-delete',
    templateUrl: './popup-phieuxuat-delete.component.html'
})
export class PhieuXuatDeletePopupComponent implements OnInit {
  phieuxuat: PhieuXuat;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private phieuxuatService: PhieuXuatService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.phieuxuatService.delete(id).pipe(first())
    .subscribe(
        data => {
          this.flagDelete = true;
          this.clear()
        },
        error => {
            this.alertService.error(error);
        });
  }

  clear() {
    this.activeModal.dismiss({
      value: this.flagDelete
    });
  }
}