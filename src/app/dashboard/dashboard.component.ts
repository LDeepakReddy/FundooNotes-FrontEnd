import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 200;
  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  snavToggle() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        this.contentMargin = 50;
      }
      else {
        this.contentMargin = 400;
      }
    }

  ngOnInit(): void {
  }

}
