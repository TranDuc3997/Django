import { DatePipe } from "@angular/common";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class ParseConstant {
  public static parseToDate(date: any) {
    return date.year + "-" + date.month + "-" + date.day;
  }
  public static parseToJsonDate(date: any) {
    let lst = date.split("-");
    let result: NgbDateStruct = { year: +lst[0], month: +lst[1], day: +lst[2] };
    return result;
  }
}
