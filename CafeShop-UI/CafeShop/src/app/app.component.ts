import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'CafeShop';
  public tables = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/tables').subscribe((tablesResponse: any) => {
      this.tables = tablesResponse;
    });
  }
}
