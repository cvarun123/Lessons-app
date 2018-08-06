import { Component, OnInit } from '@angular/core';
import { LessonService } from './lesson.service';
import * as _ from "underscore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kaplan-app';
  lessons: any;
  groupedLessons: any;
  groupNames: any;

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
  	this.lessonService.getLessons().subscribe((data) => {
  		console.log(data);
  		this.lessons = data;
  		for(var item of this.lessons){
  			item["date"] = new Date(item.time).toDateString();
  		}
		this.groupedLessons = _.groupBy(this.lessons, 'date');
  		this.groupNames = Object.keys(this.groupedLessons);
  	})
  }

  getGroupItems(groupName) {
  	return this.groupedLessons[groupName];
  }
}
