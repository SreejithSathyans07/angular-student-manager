import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit{
  id: string='';
  allowEdit: string = '';
  limit: string = '';
  constructor(private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.id = route['id'];
    });

    this.activatedRoute.queryParams.subscribe(route => {
      this.allowEdit = route['allowEdit'];
      this.limit = route['limit'];
    })
  }
}
