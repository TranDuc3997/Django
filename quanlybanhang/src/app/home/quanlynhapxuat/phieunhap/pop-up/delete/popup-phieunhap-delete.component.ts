import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { PhieuNhap } from '../../../../../_models/phieunhap';
import { PhieuNhapService } from '../../../../../_services/phieunhap.service';

@Component({
    selector: 'phieunhap-delete',
    templateUrl: './popup-phieunhap-delete.component.html'
})
export class PhieuNhapDeletePopupComponent implements OnInit {
  phieunhap: PhieuNhap;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private phieunhapService: PhieuNhapService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.phieunhapService.delete(id).pipe(first())
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