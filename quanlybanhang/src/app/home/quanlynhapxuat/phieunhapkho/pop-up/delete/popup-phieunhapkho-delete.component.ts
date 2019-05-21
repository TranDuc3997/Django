import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { PhieuNhapKho } from '../../../../../_models/phieunhapkho';
import { PhieuNhapKhoService } from '../../../../../_services/phieunhapkho.service';

@Component({
    selector: 'phieunhapkho-delete',
    templateUrl: './popup-phieunhapkho-delete.component.html'
})
export class PhieuNhapKhoDeletePopupComponent implements OnInit {
  phieunhapkho: PhieuNhapKho;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private phieunhapkhoService: PhieuNhapKhoService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.phieunhapkhoService.delete(id).pipe(first())
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