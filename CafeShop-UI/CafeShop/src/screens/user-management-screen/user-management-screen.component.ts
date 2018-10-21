
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-user-management-screen',
  templateUrl: './user-management-screen.component.html',
  styleUrls: ['./user-management-screen.component.scss']
})
export class UserManagementScreenComponent implements OnInit {
  @Output() viewDetailEmployee = new EventEmitter<any>();
  employees = [];
  employeeName = "";
  editEmployee = null;
  isShowEmployeeForm = false;
  isShowEditEmployeeForm  =false;
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['nameEmp', 'phoneEmp', 'emailEmp', 'DOB','genderEmp','typeEmp','actions'];

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

  showEmployeeForm() {
    this.isShowEmployeeForm = true;
  }

  onAddResult(employee) {
    this.isShowEmployeeForm = false;
    if (!!employee) {
      alert("Them moi thanh ccong");
      this.employees.push(employee);
      this.employees = [...this.employees];
    }
  }

  deleteEmployee(employeeId) {
    if (!window.confirm("Ban muon xoa khong"))
      return;

    this.http.delete(this.URL + '/employees/' + employeeId)
    .subscribe(() => {
      this.employees  = this.employees.filter(x => x.id !== employeeId);
    });
  }

  openEditEmployeeForm(employee) {
    this.isShowEditEmployeeForm = true;
    this.editEmployee = employee;
  }

  onEditResult(employee) {
    this.isShowEditEmployeeForm = false;
    if (!!employee) {
      alert("Bien tap tnnanh cong");
      const index = this.employees.findIndex( x => x.id === employee.id);
      this.employees[index] = employee;
      this.employees = [...this.employees];
    }
  }
}
