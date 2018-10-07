import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cafeshop-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent {
  @Input() foods = [];
  @Input() orders = [];
  @Input() table = null;
  @Output() buttonClicked = new EventEmitter<any>();

  displayedColumns: string[] = ['name', 'type', 'price', 'quantity'];

  getOrdersMapping() {
    return this.foods.map(x => ({
      ...x,
      quantity: this.getDefaultIfNull(this.orders.find(t => t.foodId === x.id))
    }));
  }

  getTotal() {
    return this.orders.reduce((total, item) => {
      return total + item.quantity * this.foods.find(t => t.id === item.foodId).price;
    }, 0);
  }

  getDefaultIfNull(order) {
    if (!!order) {
      return order.quantity;
    }

    return null;
  }

  buyOne(food) {
    console.log(food);
    const foodItem = this.orders.find(x => x.foodId === food.id);
    if (!!foodItem) {
      foodItem.quantity++;
    } else {
      this.orders.push({foodId: food.id, tableId: this.table.id, quantity: 1});
    }
  }

  removeOne(food) {
    console.log(food);
    const foodItem = this.orders.find(x => x.foodId === food.id);
    if (!!foodItem) {
      foodItem.quantity--;

      if (foodItem.quantity <= 0) {
        this.orders = this.orders.filter(x => x.quantity > 0);
      }
    }
  }
}
