import { Injectable } from '@angular/core';

Injectable()
export class SectionServiceClient {

  createSection(section) {
    return fetch('http://localhost:3000/api/section', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    }).then(response => response.json());
  }

  findAllSections() {
    return fetch('http://localhost:3000/api/section')
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json());
  }
}
