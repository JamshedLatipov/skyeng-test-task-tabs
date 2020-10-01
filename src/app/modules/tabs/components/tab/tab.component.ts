import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { TabTitleComponent } from '../tab-title/tab-title.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  @Input()
  isActive: boolean;

  @ContentChild(TabContentComponent)
  contentComponent: TabContentComponent;

  @ContentChild(TabTitleComponent)
  titleComponent: TabTitleComponent;

  constructor() {}

  ngOnInit(): void {}
}
