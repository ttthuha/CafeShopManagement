import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-user-management-screen',
  templateUrl: './user-management-screen.component.html',
  styleUrls: ['./user-management-screen.component.scss']
})
export class UserManagementScreenComponent implements OnInit {
  employees=[];
  public URL = 'https://localhost:5000/api';
  constructor(private http: HttpClient) { }

  displayedColumns: string[] = ['nameEmp', 'phoneEmp', 'emailEmp', 'DOB','genderEmp','typeEmp'];
  ngOnInit(): void {
    this.http.get(this.URL + '/employees').subscribe((employeesResponse: any) => {
      this.employees = employeesResponse;
    });

  }
}
