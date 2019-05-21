import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { ChiTietPhieuNhap } from '../../../_models/chitietphieunhap';
import { ChiTietPhieuNhapService } from '../../../_services/chitietphieunhap.service';
import { ChiTietPhieuNhapDeletePopupComponent } from './pop-up/delete/popup-chitietphieunhap-delete.component';
import { ChiTietPhieuNhapCreatePopupComponent } from './pop-up/create/popup-chitietphieunhap-create.component';
import { ChiTietPhieuNhapUpdatePopupComponent } from './pop-up/update/popup-chitietphieunhap-update.component';

@Component({
    selector: "chitietphieunhap",
    templateUrl: 'chitietphieunhap.component.html'
})
export class ChiTietPhieuNhapComponent implements OnInit {
    chitietphieunhap: ChiTietPhieuNhap[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private chitietphieunhapService: ChiTietPhieuNhapService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListChiTietPhieuNhap();
    }

    getListChiTietPhieuNhap() {
        this.chitietphieunhapService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.chitietphieunhap = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(chitietphieunhap: ChiTietPhieuNhap){
        const modalRef = this.modalService.open(ChiTietPhieuNhapDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.chitietphieunhap = chitietphieunhap;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListChiTietPhieuNhap();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(ChiTietPhieuNhapCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListChiTietPhieuNhap();
                }
            })
            .catch(() => {});
    }
    openUpdate(chitietphieunhap: ChiTietPhieuNhap){
        const modalRef = this.modalService.open(ChiTietPhieuNhapUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.chitietphieunhap = chitietphieunhap;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListChiTietPhieuNhap();
                }
            })
            .catch(() => {});
    }
}