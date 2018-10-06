import { Component, Input } from '@angular/core';

@Component({
  selector: 'cafeshop-frontdesk',
  templateUrl: './frontdesk.component.html',
  styleUrls: ['./frontdesk.component.scss']
})
export class FrontdeskComponent {
  @Input() tables = [];
}
