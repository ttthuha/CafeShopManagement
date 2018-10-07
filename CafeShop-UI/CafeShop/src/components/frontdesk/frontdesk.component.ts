import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cafeshop-frontdesk',
  templateUrl: './frontdesk.component.html',
  styleUrls: ['./frontdesk.component.scss']
})
export class FrontdeskComponent {
  @Input() tables = [];
  @Input() foods = [];
  @Input() orders = {};
  @Output() viewDetailMenuClick = new EventEmitter<any>();

  displayedColumns: string[] = ['name', 'type', 'status', 'actions'];

  getStatus(table) {
    const orderTable = this.orders[table.id];
    if (!!orderTable) {
      let sum = 0;
      for (const order of orderTable) {
        sum += order.quantity * this.foods.find(x => x.id === order.foodId).price;
      }

      return sum;
    }
  }
}
