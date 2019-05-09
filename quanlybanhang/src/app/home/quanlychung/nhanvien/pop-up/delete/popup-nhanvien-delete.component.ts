import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { NhanVienService } from '../../nhanvien.service';
import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { NhanVien } from '../../../../../_models/nhanvien';

@Component({
    selector: 'nhanvien-delete',
    templateUrl: './popup-nhanvien-delete.component.html'
})
export class NhanVienDeletePopupComponent implements OnInit {
  nhanvien: NhanVien;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private nhanVienService: NhanVienService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.nhanVienService.delete(id).pipe(first())
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