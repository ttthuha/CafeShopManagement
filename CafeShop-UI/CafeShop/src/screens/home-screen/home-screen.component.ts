import { Component, OnInit } from '@angular/core';   
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'cafeshop-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  public URL = 'http://localhost:5000/api';
  public title = 'CafeShop';
  public tables = [];
  public foods = [];
  public orders = [];
  public menuDetail = {
    isShow: false,
    selectedTable: null,
    orders: []
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    forkJoin(this.http.get(this.URL + '/tables'), this.http.get(this.URL + '/foods'), this.http.get(this.URL + '/orders'))
    .subscribe(([tablesResponse, foodResponse, orderResponse]) => {
      this.tables = tablesResponse as any[];
      this.foods = foodResponse as any[];
      this.orders = (orderResponse  as any[]).reduce((total, item) => {
        total[item.tableId] = total[item.tableId] || [];
        total[item.tableId].push(item);
        return total;
      }, {});
    });
  }

  viewDetailMenuClick(table) {
    this.menuDetail.selectedTable = table;
    this.menuDetail.isShow = true;

    const subscription = this.http.get(this.URL + '/orders?tableId=' + table.id).subscribe((orderReponse: any) => {
      this.menuDetail.orders = orderReponse;
      subscription.unsubscribe();
    });
  }

  detailButtonClicked(sender) {
    const close = () => {
      this.menuDetail.isShow = false;
      this.menuDetail.selectedTable = false;
      this.menuDetail.orders = [];
    };
    let subscription;
    switch (sender.type) {
      case 'close':
        close();
        break;
      case 'save':
      subscription = this.http.post(this.URL + '/orders', sender.orders)
      .subscribe((orderReponse: any) => {
          this.orders[this.menuDetail.selectedTable.id] = orderReponse;
          close();
          subscription.unsubscribe();
        });
        break;
      case 'checkout':
        subscription = this.http.put(this.URL + '/orders/checkout?tableId=' + this.menuDetail.selectedTable.id, {})
        .subscribe((checkoutResponse: any) => {
          this.orders[this.menuDetail.selectedTable.id] = null;
          close();
          subscription.unsubscribe();
        });
        break;
    }
  }
}
