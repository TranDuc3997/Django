import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { first } from "rxjs/operators";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from "@angular/forms";
import { create } from "domain";
import { KhuyenMai } from "../../../../../_models/khuyenmai";
import { KhuyenMaiService } from "../../../../../_services/khuyenmai.service";
import { AlertService } from "../../../../../_services";
import { PatternConstant } from "../../../../../constant/pattern.constants";
import { SERVER_API_URL } from "../../../../../app.constants";
import { FileService } from "../../../../../_services/file.service";
import { ParseConstant } from "../../../../../ultil/parse";

@Component({
  selector: "khuyenmai-create",
  templateUrl: "./popup-khuyenmai-create.component.html"
})
export class KhuyenMaiCreatePopupComponent implements OnInit {
  flagCreate = false;
  khuyenmai = new KhuyenMai();
  createForm: FormGroup;
  response: any;
  imageURL: string;
  form: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private khuyenmaiService: KhuyenMaiService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private fileService: FileService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      profile: [""]
    });
    this.createForm = new FormGroup({
      ten: new FormControl("", [
        Validators.required,
        Validators.maxLength(256)
      ]),
      hinhanh: new FormControl("", [Validators.required]),
      ngaybd: new FormControl("", [Validators.required]),
      ngaykt: new FormControl("", [Validators.required]),
      giagiam: new FormControl("", [Validators.required]),
      noidung: new FormControl("", [Validators.required]),
      anh: new FormControl("", [Validators.required])
    });
  }
  onChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.khuyenmai.hinhanh = file.name;
      this.form.get("profile").setValue(file);
    }
  }
  createKhuyenMai() {
    this.khuyenmaiService
      .create(this.khuyenmai)
      .pipe(first())
      .subscribe(
        data => {
          this.flagCreate = true;
          this.clear();
          this.uploadFile();
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
  onSubmit() {
    this.khuyenmai.ngaybd = ParseConstant.parseToDate(this.khuyenmai.ngaybd);
    this.khuyenmai.ngaykt = ParseConstant.parseToDate(this.khuyenmai.ngaykt);
    this.createKhuyenMai();
  }
  uploadFile() {
    const formData = new FormData();
    formData.append("file", this.form.get("profile").value);
    this.fileService
      .upload(formData)
      .pipe(first())
      .subscribe(
        (response: any) => {
          this.response = response;
          this.imageURL = `${SERVER_API_URL}${response.file}`;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  clear() {
    this.activeModal.dismiss({
      value: this.flagCreate
    });
  }
}
