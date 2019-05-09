import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { NhaCungCapService } from '../../../_services/nhacungcap.service';
import { NhaCungCap } from '../../../_models/nhacungcap';
import { NhaCungCapDeletePopupComponent } from './pop-up/delete/popup-nhacungcap-delete.component';
import { NhaCungCapCreatePopupComponent } from './pop-up/create/popup-nhacungcap-create.component';
import { NhaCungCapUpdatePopupComponent } from './pop-up/update/popup-nhacungcap-update.component';


@Component({
    selector: "nhacungcap",
    templateUrl: 'nhacungcap.component.html'
})
export class NhaCungCapComponent implements OnInit {
    nhacungcap: NhaCungCap[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private nhaCungCapService: NhaCungCapService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListNhaCungCap();
    }

    getListNhaCungCap() {
        this.nhaCungCapService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.nhacungcap = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(nhacungcap: NhaCungCap){
        const modalRef = this.modalService.open(NhaCungCapDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.nhacungcap = nhacungcap;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListNhaCungCap();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(NhaCungCapCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListNhaCungCap();
                }
            })
            .catch(() => {});
    }
    openUpdate(nhacungcap: NhaCungCap){
        const modalRef = this.modalService.open(NhaCungCapUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.nhacungcap = nhacungcap;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListNhaCungCap();
                }
            })
            .catch(() => {});
    }
}