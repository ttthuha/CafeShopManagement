import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public URL = 'https://localhost:44361/api';
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
    this.http.get(this.URL + '/tables').subscribe((tablesResponse: any) => {
      this.tables = tablesResponse;
    });

    this.http.get(this.URL + '/foods').subscribe((foodResponse: any) => {
      this.foods = foodResponse;
    });

    this.http.get(this.URL + '/orders').subscribe((orderResponse: any) => {
      this.orders = orderResponse.reduce((total, item) => {
        total[item.tableId] = total[item.tableId] || [];
        total[item.tableId].push(item);
        return total;
      }, {});

      console.log(this.orders);
    });
  }

  viewDetailMenuClick(table) {
    this.menuDetail.selectedTable = table;
    this.menuDetail.isShow = true;

    this.http.get(this.URL + '/orders?tableId=' + table.id).subscribe((orderReponse: any) => {
      this.menuDetail.orders = orderReponse;
    });
  }

  detailButtonClicked(sender) {
    switch (sender.type) {
      case 'close':
        this.menuDetail.isShow = false;
        this.menuDetail.selectedTable = false;
        this.menuDetail.orders = [];
        break;
      case 'save':
        this.http.post(this.URL + '/orders', sender.orders).subscribe((orderReponse: any) => {
          this.orders[this.menuDetail.selectedTable.id] = orderReponse;
          this.menuDetail.isShow = false;
          this.menuDetail.selectedTable = false;
          this.menuDetail.orders = [];
        });
        break;
      case 'checkout':
        this.http.put(this.URL + '/orders/checkout?tableId=' + this.menuDetail.selectedTable.id, {}).subscribe((checkoutResponse: any) => {
          this.orders[this.menuDetail.selectedTable.id] = null;
          this.menuDetail.isShow = false;
          this.menuDetail.selectedTable = false;
          this.menuDetail.orders = [];
        });
        break;
    }
  }
}
