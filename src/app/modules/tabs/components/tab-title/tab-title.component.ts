import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.scss'],
})
export class TabTitleComponent implements OnInit {

  @ViewChild(TemplateRef)
  titleContent: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
