import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { PhieuNhapKho } from '../../../_models/phieunhapkho';
import { PhieuNhapKhoService } from '../../../_services/phieunhapkho.service';
import { PhieuNhapKhoDeletePopupComponent } from './pop-up/delete/popup-phieunhapkho-delete.component';
import { PhieuNhapKhoCreatePopupComponent } from './pop-up/create/popup-phieunhapkho-create.component';
import { PhieuNhapKhoUpdatePopupComponent } from './pop-up/update/popup-phieunhapkho-update.component';

@Component({
    selector: "phieunhapkho",
    templateUrl: 'phieunhapkho.component.html'
})
export class PhieuNhapKhoComponent implements OnInit {
    phieunhapkho: PhieuNhapKho[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private phieunhapkhoService: PhieuNhapKhoService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListPhieuNhapKho();
    }

    getListPhieuNhapKho() {
        this.phieunhapkhoService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.phieunhapkho = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(phieunhapkho: PhieuNhapKho){
        const modalRef = this.modalService.open(PhieuNhapKhoDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.phieunhapkho = phieunhapkho;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuNhapKho();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(PhieuNhapKhoCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuNhapKho();
                }
            })
            .catch(() => {});
    }
    openUpdate(phieunhapkho: PhieuNhapKho){
        const modalRef = this.modalService.open(PhieuNhapKhoUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.phieunhapkho = phieunhapkho;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuNhapKho();
                }
            })
            .catch(() => {});
    }
}