import { Component } from '@angular/core';
import { Table } from 'src/app/model/table';

@Component({
  selector: 'app-consolidated',
  templateUrl: './consolidated.component.html',
  styleUrls: ['./consolidated.component.css'],
})
export class ConsolidatedComponent {
  tableData: Table = {
    header: ['Semester', 'CGPA'],
    data: [
      { key: 'Semester 1', value: '3.40' },
      { key: 'Semester 2', value: '3.80' },
      { key: 'Semester 3', value: '4.15' },
      { key: 'Semester 4', value: '4.25' },
      { key: 'Semester 5', value: '3.70' },
      { key: 'Semester 6', value: '4.50' },
    ],
  };
  avgCgpa = {key: 'Overall CGPA', value: '3.96'}
}
