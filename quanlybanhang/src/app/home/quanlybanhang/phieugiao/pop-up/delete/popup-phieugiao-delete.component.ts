import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { AlertComponent } from '../../../../../_directives';
import { AlertService } from '../../../../../_services';

@Component({
    selector: 'xx-delete',
    templateUrl: './popup-xx-delete.component.html'
})
export class XXXDeletePopupComponent implements OnInit {
  xx: XXX;
  flagDelete = false;
  constructor(
      public activeModal: NgbActiveModal,
      private xxService: XXXService,
      private alertService: AlertService
    ) {}
  ngOnInit(): void {
  }

  confirmDelete(id: number){
    this.xxService.delete(id).pipe(first())
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