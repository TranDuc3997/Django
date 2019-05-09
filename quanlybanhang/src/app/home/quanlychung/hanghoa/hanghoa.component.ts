import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from '../../../_services';
import { HangHoa } from '../../../_models/hanghoa';
import { HangHoaService } from '../../../_services/hanghoa';


@Component({
    selector: "hanghoa",
    templateUrl: 'hanghoa.component.html'
})
export class HangHoaComponent implements OnInit {
    hanghoa: HangHoa[];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private hangHoaService: HangHoaService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListHangHoa();
    }

    getListHangHoa() {
        this.hangHoaService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.hanghoa = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(nhacungcap: HangHoa){
        // const modalRef = this.modalService.open(NhaCungCapDeletePopupComponent, {
        //     size: "lg",
        //     centered: true
        //   });
        //   modalRef.componentInstance.nhacungcap = nhacungcap;
        //   modalRef.result.then(result => {},
        //     reason => {
        //         if (reason.value) {
        //           // update value for page
        //           this.getListNhaCungCap();
        //         }
        //     })
        //     .catch(() => {});
    }
    openCreate(){
        // const modalRef = this.modalService.open(NhaCungCapCreatePopupComponent, {
        //     size: "lg",
        //     centered: true
        //   });
        //   modalRef.result.then(result => {},
        //     reason => {
        //         if (reason.value) {
        //           // update value for page
        //           this.getListNhaCungCap();
        //         }
        //     })
        //     .catch(() => {});
    }
    openUpdate(nhacungcap: HangHoa){
        // const modalRef = this.modalService.open(NhaCungCapUpdatePopupComponent, {
        //     size: "lg",
        //     centered: true
        //   });
        //   modalRef.componentInstance.nhacungcap = nhacungcap;
        //   modalRef.result.then(result => {},
        //     reason => {
        //         if (reason.value) {
        //           // update value for page
        //           this.getListNhaCungCap();
        //         }
        //     })
        //     .catch(() => {});
    }
}