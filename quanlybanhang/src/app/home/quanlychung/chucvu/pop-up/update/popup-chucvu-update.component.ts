import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { create } from 'domain';
import { ChucVu } from '../../../../../_models/chucvu';
import { ChucVuService } from '../../../../../_services/chucvu.service';
import { AlertService } from '../../../../../_services';
import { PatternConstant } from '../../../../../constant/pattern.constants';

@Component({
  selector: 'chucvu-update',
  templateUrl: './popup-chucvu-update.component.html'
})
export class ChucVuUpdatePopupComponent implements OnInit {
  flagUpdate = false;
  chucvu: ChucVu;
  createForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private chucvuService: ChucVuService,
    private alertService: AlertService,
  ) { }
  ngOnInit(): void {
    this.createForm = new FormGroup({

      ten: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(128),
        Validators.pattern(PatternConstant.PATTERN_WORD_VN)
      ]),
    });
  }
  updateChucVu() {
    this.chucvuService.update(this.chucvu).pipe(first())
      .subscribe(
        data => {
          this.flagUpdate = true;
          this.clear()
        },
        error => {
          this.alertService.error(error);
        });
  }
  onSubmit(){
    this.updateChucVu();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagUpdate
    });
  }
}