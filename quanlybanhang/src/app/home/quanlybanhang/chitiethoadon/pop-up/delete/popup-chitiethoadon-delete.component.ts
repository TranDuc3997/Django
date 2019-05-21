import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { ChiTietHoaDon } from '../../../../../_models/chitiethoadon';
import { ChiTietHoaDonService } from '../../../../../_services/chitiethoadon.service';

@Component({
    selector: 'chitiethoadon-delete',
    templateUrl: './popup-chitiethoadon-delete.component.html'
})
export class ChiTietHoaDonDeletePopupComponent implements OnInit {
  chitiethoadon: ChiTietHoaDon;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private chitiethoadonService: ChiTietHoaDonService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.chitiethoadonService.delete(id).pipe(first())
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