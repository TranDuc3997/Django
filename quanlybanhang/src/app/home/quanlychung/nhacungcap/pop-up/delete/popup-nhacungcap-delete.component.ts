import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { NhaCungCapService } from '../../../../../_services/nhacungcap.service';
import { NhaCungCap } from '../../../../../_models/nhacungcap';

@Component({
    selector: 'nhacungcap-delete',
    templateUrl: './popup-nhacungcap-delete.component.html'
})
export class NhaCungCapDeletePopupComponent implements OnInit {
  nhacungcap: NhaCungCap;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private nhaCungCapService: NhaCungCapService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.nhaCungCapService.delete(id).pipe(first())
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