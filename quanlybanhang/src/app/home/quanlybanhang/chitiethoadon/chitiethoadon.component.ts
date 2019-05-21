import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { ChiTietHoaDon } from '../../../_models/chitiethoadon';
import { ChiTietHoaDonService } from '../../../_services/chitiethoadon.service';
import { ChiTietHoaDonDeletePopupComponent } from './pop-up/delete/popup-chitiethoadon-delete.component';
import { ChiTietHoaDonCreatePopupComponent } from './pop-up/create/popup-chitiethoadon-create.component';
import { ChiTietHoaDonUpdatePopupComponent } from './pop-up/update/popup-chitiethoadon-update.component';

@Component({
    selector: "chitiethoadon",
    templateUrl: 'chitiethoadon.component.html'
})
export class ChiTietHoaDonComponent implements OnInit {
    chitiethoadon: ChiTietHoaDon[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private chitiethoadonService: ChiTietHoaDonService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListChiTietHoaDon();
    }

    getListChiTietHoaDon() {
        this.chitiethoadonService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.chitiethoadon = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(chitiethoadon: ChiTietHoaDon){
        const modalRef = this.modalService.open(ChiTietHoaDonDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.chitiethoadon = chitiethoadon;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListChiTietHoaDon();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(ChiTietHoaDonCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListChiTietHoaDon();
                }
            })
            .catch(() => {});
    }
    openUpdate(chitiethoadon: ChiTietHoaDon){
        const modalRef = this.modalService.open(ChiTietHoaDonUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.chitiethoadon = chitiethoadon;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListChiTietHoaDon();
                }
            })
            .catch(() => {});
    }
}