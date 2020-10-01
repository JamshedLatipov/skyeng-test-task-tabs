import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

import { TabComponent } from '../../components/tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  tabItems$: Observable<TabComponent[]>;

  activeTab: TabComponent;

  constructor() {}

  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes.pipe(
      startWith(''),
      tap((tabs: QueryList<TabComponent>) => {
        const active = this.tabs.toArray().find((tab) => tab.isActive);
        if (!active && this.tabs.length > 0) {
          this.selectTab(this.tabs.first);
        }
      }),
      map(() => this.tabs.toArray()),
    );
  }

  ngAfterContentChecked() {
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabComponent) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }
}
