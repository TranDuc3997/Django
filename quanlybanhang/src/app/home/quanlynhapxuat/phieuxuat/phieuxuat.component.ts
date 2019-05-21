import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { PhieuXuat } from '../../../_models/phieuxuatkho';
import { PhieuXuatDeletePopupComponent } from './pop-up/delete/popup-phieuxuat-delete.component';
import { PhieuXuatCreatePopupComponent } from './pop-up/create/popup-phieuxuat-create.component';
import { PhieuXuatUpdatePopupComponent } from './pop-up/update/popup-phieuxuat-update.component';
import { PhieuXuatService } from '../../../_services/phieuxuatkho.service';

@Component({
    selector: "phieuxuat",
    templateUrl: 'phieuxuat.component.html'
})
export class PhieuXuatComponent implements OnInit {
    phieuxuat: PhieuXuat[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private phieuxuatService: PhieuXuatService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListPhieuXuat();
    }

    getListPhieuXuat() {
        this.phieuxuatService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.phieuxuat = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(phieuxuat: PhieuXuat){
        const modalRef = this.modalService.open(PhieuXuatDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.phieuxuat = phieuxuat;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuXuat();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(PhieuXuatCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuXuat();
                }
            })
            .catch(() => {});
    }
    openUpdate(phieuxuat: PhieuXuat){
        const modalRef = this.modalService.open(PhieuXuatUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.phieuxuat = phieuxuat;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListPhieuXuat();
                }
            })
            .catch(() => {});
    }
}