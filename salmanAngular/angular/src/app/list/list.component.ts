import { Component, OnInit } from '@angular/core';
import {Lists} from '../List';
import {ListSchema} from '../ListScema';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
    lists = Lists;
    selectedlist: ListSchema;

  ngOnInit() {
  }

  onSelect(listItem: ListSchema): void {
    this.selectedlist = listItem;
  }
}
