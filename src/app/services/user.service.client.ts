import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  login = (user) => {
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      'credentials': 'include',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

}
