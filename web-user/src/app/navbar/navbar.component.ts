import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from "@angular/core";

import { Router, NavigationStart } from "@angular/router";
import { Subject, Subscription, interval, Observable } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

import { isNullOrUndefined } from "util";
import { AuthenticationService } from "../_services";


@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["navbar.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {

  eventSubscriber: Subscription;
  eventSubscriberAppeal: Subscription;
  sub: Subject<any> = new Subject();
  cdName: String;

  isLoggedIn$: Observable<boolean>; 
  constructor(
    @Inject(PLATFORM_ID) private platform: Object,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn
    // this.checkLogin();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Destroy event subscriber
  ngOnDestroy(): void {
    if (this && isPlatformBrowser(this.platform)) {
      this.sub.next();
      this.sub.complete();
    }
  }
}
