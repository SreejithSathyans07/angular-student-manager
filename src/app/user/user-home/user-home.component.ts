import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  constructor(private router: Router){

  }

  data = [
    {key: 'Attendance', value: '80%'},
    {key:'Last sem CGPA', value: '4.50'},
    {key: 'Overall CGPA', value: '3.96'}
  ]

  navigateToAdmission(){
    this.router.navigate(['/admission', 20], {queryParams:{allowEdit: 0, limit: 20},})
  }

}
