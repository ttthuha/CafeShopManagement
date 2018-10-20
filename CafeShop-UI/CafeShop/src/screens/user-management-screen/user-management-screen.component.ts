
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-user-management-screen',
  templateUrl: './user-management-screen.component.html',
  styleUrls: ['./user-management-screen.component.scss']
})
export class UserManagementScreenComponent implements OnInit {
  employees = [];
  employeeName = "";
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['nameEmp', 'phoneEmp', 'emailEmp', 'DOB','genderEmp','typeEmp'];
  
  ngOnInit(): void {
    this.http.get(this.URL + '/employees').subscribe((employeeResponse: any) => {
    this.employees = employeeResponse;
    });

  }
  onSearchChange($event)
  {
    this.employeeName=$event.target.value;
  }
  onSearch()
  {
    console.log(this.employeeName);
    this.http.get(this.URL + '/employees/search?employeeName=' + this.employeeName).subscribe((employeeResponse: any) => {
      this.employees = employeeResponse;
    });
  }
}
