import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient{
  findAllCourses() {
    return fetch('http://localhost:8080/api/course')
      .then(response => response.json());
  }

  findAllModules() {
    return fetch('http://localhost:8080/api/module')
      .then(response => response.json());
  }

  findAllLessons() {
    return fetch('http://localhost:8080/api/lesson')
      .then(response => response.json());
  }

  findAllTopics() {
    return fetch('http://localhost:8080/api/topic')
      .then(response => response.json());
  }
}
