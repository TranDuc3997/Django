import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';

@Component({
    selector: "xx",
    templateUrl: 'xx.component.html'
})
export class XXXComponent implements OnInit {
    xx: XXX[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private xxService: XXXService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListXXX();
    }

    getListXXX() {
        this.xxService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.xx = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(xx: XXX){
        const modalRef = this.modalService.open(XXXDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.xx = xx;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListXXX();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(XXXCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListXXX();
                }
            })
            .catch(() => {});
    }
    openUpdate(xx: XXX){
        const modalRef = this.modalService.open(XXXUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.xx = xx;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListXXX();
                }
            })
            .catch(() => {});
    }
}