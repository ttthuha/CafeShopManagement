import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.scss']
})
export class HistoryScreenComponent implements OnInit {
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(this.URL + '/history').subscribe((tablesResponse: any) => {
    //   this.tables = tablesResponse;
    // });

  }
}
