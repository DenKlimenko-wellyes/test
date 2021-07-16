import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TreeElementInterface {
  term: string | number;
  children?: TreeElementInterface[];
  count?: number;
  termHtml?: string;
  condition?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [
    {
      term: 't1',
      termHtml: '<b>T1</b>',
      count: 1,
      children: [
        {
          term: 't1.1',
          count: 2,
          children: [
            {
              term: 't1.1.1',
              count: 3,
              children: [{ term: 't1.1.1.1' }, { term: 't1.1.1.2' }],
            },
            {
              term: 't1.1.2',
              count: 0,
            },
          ],
        },
        {
          term: 't1.2',
          count: 4,
        },
      ],
    },
    {
      term: 2,
      count: 5,
      children: [
        {
          term: 't2.1',
          count: 2,
        },
        {
          term: 't2.2',
          children: [{ term: 't2.2.1' }, { term: 't2.2.2' }],
        },
      ],
    },
  ];

  toggle(element: TreeElementInterface): void {
    if (!element.hasOwnProperty('condition')) {
      element.condition = true;
      return;
    }
    element.condition = !element.condition;
  }
}
