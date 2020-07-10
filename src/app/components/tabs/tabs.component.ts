import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() seletectedTab: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (!activeTabs.length) {
      this.onSelect(this.tabs.first);
    }
  }

  ngOnInit(): void {
  }

  onSelect(tab: TabComponent) {
    this.tabs.toArray().forEach(tabItem => tabItem.active = false);
    tab.active = true;
    this.seletectedTab.emit(tab);
  }
}
