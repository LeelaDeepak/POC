import { Component } from '@angular/core';


@Component({
  selector: 'app-tabviews',
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css',
})
export class TabviewsComponent {

  activeTab: number = 1;

  activateTab(tabNo: number) {
    this.activeTab = tabNo;
  }
}
