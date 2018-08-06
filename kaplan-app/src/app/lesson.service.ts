import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LessonService {
	lessonApi = 'http://localhost:8000/api/lessons';

	constructor(private http: HttpClient) { }

	getLessons() {
		return this.http.get(this.lessonApi);
	}
}