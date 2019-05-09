import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { KhachHangService } from '../../khachhang.service';
import { KhachHang } from '../../../../../_models/khachang';
import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';

@Component({
    selector: 'khachhang-delete',
    templateUrl: './popup-khachhang-delete.component.html'
})
export class KhachHangDeletePopupComponent implements OnInit {
  khachhang: KhachHang;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private khachHangService: KhachHangService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.khachHangService.delete(id).pipe(first())
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