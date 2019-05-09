import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { KhachHang } from '../../../_models/khachang';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { KhachHangService } from './khachhang.service';
import { AlertService } from '../../../_services';
import { KhachHangDeletePopupComponent } from './pop-up/delete/popup-khachhang-delete.component';
import { KhachHangCreatePopupComponent } from './pop-up/create/popup-khachhang-create.component';
import { KhachHangUpdatePopupComponent } from './pop-up/update/popup-khachhang-update.component';

@Component({
    selector: "khachhang",
    templateUrl: 'khachhang.component.html'
})
export class KhachHangComponent implements OnInit {
    khachhang: KhachHang[] = [];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private khachHangService: KhachHangService,
        private alertService: AlertService
    ) { }
    ngOnInit() {
        this.getListKhachHang();
    }

    getListKhachHang() {
        this.khachHangService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data)
                    this.khachhang = data
                },
                error => {
                    this.alertService.error(error);
                });
    }

    openDelete(khachhang: KhachHang){
        const modalRef = this.modalService.open(KhachHangDeletePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.khachhang = khachhang;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListKhachHang();
                }
            })
            .catch(() => {});
    }
    openCreate(){
        const modalRef = this.modalService.open(KhachHangCreatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListKhachHang();
                }
            })
            .catch(() => {});
    }
    openUpdate(khachhang: KhachHang){
        const modalRef = this.modalService.open(KhachHangUpdatePopupComponent, {
            size: "lg",
            centered: true
          });
          modalRef.componentInstance.khachhang = khachhang;
          modalRef.result.then(result => {},
            reason => {
                if (reason.value) {
                  // update value for page
                  this.getListKhachHang();
                }
            })
            .catch(() => {});
    }
}