import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cafeshop-recruit-detail',
  templateUrl: './recruit-detail.component.html',
  styleUrls: ['./recruit-detail.component.scss']
})
export class TableDetailComponent {
  @Output() buttonClicked = new EventEmitter<any>();
  
}
