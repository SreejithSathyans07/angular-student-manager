import { Component, Input } from '@angular/core';
import { Table } from 'src/app/model/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() tableData: Table = new Table();

}
