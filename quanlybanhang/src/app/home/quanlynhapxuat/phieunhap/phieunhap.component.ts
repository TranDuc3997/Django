import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { PhieuNhap } from '../../../_models/phieunhap';
import { PhieuNhapService } from '../../../_services/phieunhap.service';
import { PhieuNhapDeletePopupComponent } from './pop-up/delete/popup-phieunhap-delete.component';
import { PhieuNhapCreatePopupComponent } from './pop-up/create/popup-phieunhap-create.component';
import { PhieuNhapUpdatePopupComponent } from './pop-up/update/popup-phieunhap-update.component';

@Component({
    selector: "phieunhap",
    templateUrl: 'phieunhap.component.html'
})
export class PhieuNhapComponent implements OnInit {
    phieunhap: PhieuNhap[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private phieunhapService: PhieuNhapService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListPhieuNhap();
    }

    getListPhieuNhap() {
        this.phieunhapService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.phieunhap = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(phieunhap: PhieuNhap){
        const modalRef = this.modalService.open(PhieuNhapDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.phieunhap = phieunhap;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuNhap();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(PhieuNhapCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuNhap();
                }
            })
            .catch(() => {});
    }
    openUpdate(phieunhap: PhieuNhap){
        const modalRef = this.modalService.open(PhieuNhapUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.phieunhap = phieunhap;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuNhap();
                }
            })
            .catch(() => {});
    }
}