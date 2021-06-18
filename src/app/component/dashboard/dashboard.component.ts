import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import {
  CdkDropList,
  CdkDragEnter,
  moveItemInArray,
  CdkDragDrop,
  CdkDrag,
  CdkDropListGroup
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private COLORS = [
    '#ea4335',
    '#4285f4',
    '#fbbc04',
    '#34a853',
    '#fa7b17',
    '#f538a0',
    '#a142f4',
    '#24c1e0',
    '#9aa0a6',
    '#5195ea',
    '#e25142',
    '#f5c518',
    '#41af6a',
    '#f6aea9',
    '#a50e0e',
    '#aecbfa',
    '#174ea6',
    '#fde293',
    '#a8dab5',
    '#0d652d',
    '#fdc69c',
    '#fba9d6',
    '#c92786',
    '#d7aefb',
    '#8430ce',
    '#a1e4f2',
    '#007b83',
    '#e8eaed',
    '#b9d4f6',
    '#f3b9b3',
    '#fbe7a2',
    '#b3dfc3',
  ];
  public cards = [
    { title: 'Card 1', cols: 2, rows: 2, color: this.getColor() },
    { title: 'Card 2', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 3', cols: 3, rows: 1, color: this.getColor() },
    { title: 'Card 4', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 5', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 6', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 7', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 8', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 9', cols: 1, rows: 3, color: this.getColor() },
    { title: 'Card 10', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 11', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 12', cols: 2, rows: 1, color: this.getColor() },
    { title: 'Card 13', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 14', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 15', cols: 1, rows: 2, color: this.getColor() },
    { title: 'Card 16', cols: 2, rows: 1, color: this.getColor() },
    { title: 'Card 17', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 18', cols: 2, rows: 1, color: this.getColor() },
    { title: 'Card 19', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 20', cols: 1, rows: 1, color: this.getColor() },
    { title: 'Card 21', cols: 1, rows: 1, color: this.getColor() },
  ];

  @ViewChildren(CdkDropList)
  dropsQuery!: QueryList<CdkDropList>;
  drops!: CdkDropList[];




  constructor() {}
  private getColor() {
    return this.COLORS[Math.floor(Math.random() * 32)];
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dropsQuery?.changes.subscribe(() => {
      this.drops = this.dropsQuery?.toArray();
      console.log(this.drops);
    });
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery?.toArray();
      console.log(this.drops);
    });
  }
  entered(event: CdkDragDrop<number, any>) {
    console.log(event);
    moveItemInArray(this.cards, event.previousContainer.data, event.container.data);
  }
  entered2($event: any) {
    console.log('dropEvent', $event.item.data, $event.container.data, $event);
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }

  enter = (drag: CdkDrag, drop: CdkDropList) => {
    return true;
  };
}
