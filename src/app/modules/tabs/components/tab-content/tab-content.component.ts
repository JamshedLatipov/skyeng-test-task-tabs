import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
