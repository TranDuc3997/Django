import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { first } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { create } from 'domain';import { ChucVu } from '../../../../../_models/chucvu';
import { ChucVuService } from '../../../../../_services/chucvu.service';
import { AlertService } from '../../../../../_services';
import { PatternConstant } from '../../../../../constant/pattern.constants';
;

@Component({
  selector: 'chucvu-create',
  templateUrl: './popup-chucvu-create.component.html'
})
export class ChucVuCreatePopupComponent implements OnInit {
  flagCreate = false;
  chucvu = new ChucVu();
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

  createChucVu() {
    this.chucvuService.create(this.chucvu).pipe(first())
      .subscribe(
        data => {
          this.flagCreate = true;
          this.clear()
        },
        error => {
          this.alertService.error(error);
        });
  }
  onSubmit(){
    this.createChucVu();
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}