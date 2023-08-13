import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-barranavigation',
  templateUrl: './barranavigation.component.html',
  styleUrls: ['./barranavigation.component.css'],
})
export class BarranavigationComponent {

  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 1000px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }

}
