import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.scss']
})
export class HistoryScreenComponent implements OnInit {
  historyOrders = [];
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  displayedColumns: string[] = ['nameTable', 'nameFood', 'quantity', 'total','date'];
  
  ngOnInit(): void {
    this.http.get(this.URL + '/history-orders').subscribe((historyOrdersResponse: any) => {
         this.historyOrders = historyOrdersResponse;
      });
  }
}
