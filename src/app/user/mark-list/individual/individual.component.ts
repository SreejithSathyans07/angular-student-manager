import { Component } from '@angular/core';
import { Table } from 'src/app/model/table';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent {
  sem1Data: Table = {
    header: ['Subject', 'Score'],
    data:[{ key: 'Mathematics', value: '78' }, {key: 'Applied Mechanics', value: '67'},{key: 'Engineering drawing', value: '77'}]
  }

  sem2Data: Table = {
    header: ['Subject', 'Score'],
    data:[{ key: 'Mathematics', value: '56' }, {key: 'Statistics', value: '47'},{key: 'Algorithms', value: '87'}]
  }

  sem3Data: Table = {
    header: ['Subject', 'Score'],
    data:[{ key: 'Chemical Engineering', value: '79' }, {key: 'Electrical Engineering', value: '77'},{key: 'Fluid Mechanics', value: '94'}]
  }
}
