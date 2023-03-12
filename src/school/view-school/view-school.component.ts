import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.css']
})
export class ViewSchoolComponent implements OnInit {
  school: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const schoolId = this.route.snapshot.paramMap.get('id');
  }
}
