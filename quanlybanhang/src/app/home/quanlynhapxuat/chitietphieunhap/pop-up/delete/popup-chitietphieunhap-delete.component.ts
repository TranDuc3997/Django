
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';
import { ChiTietPhieuNhap } from '../../../../../_models/chitietphieunhap';
import { ChiTietPhieuNhapService } from '../../../../../_services/chitietphieunhap.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';

@Component({
    selector: 'chitietphieunhap-delete',
    templateUrl: './popup-chitietphieunhap-delete.component.html'
})
export class ChiTietPhieuNhapDeletePopupComponent implements OnInit {
  chitietphieunhap: ChiTietPhieuNhap;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private chitietphieunhapService: ChiTietPhieuNhapService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.chitietphieunhapService.delete(id).pipe(first())
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