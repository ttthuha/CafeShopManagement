import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.scss']
})
export class HistoryScreenComponent implements OnInit {
  @Input() tables = [];
  @Input() foods = [];
  @Input() orders = {};
  //public URL = 'https://localhost:44361/api';
 // constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['nameTable', 'nameFood', 'quantity', 'total','date'];
  ngOnInit(): void {
    // this.http.get(this.URL + '/history').subscribe((tablesResponse: any) => {
    // this.tables = tablesResponse;
    // });

  }
}
