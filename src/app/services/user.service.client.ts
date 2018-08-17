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
  register = (user) => {
    return fetch('http://localhost:3000/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

  currentUser = () => {
    return fetch('http://localhost:3000/api/profile', {
      credentials: 'include'
    }).then(response => {
      // console.log(response.json());
      return response.json();
    });
  }

  updateUser = (user) => {
    return fetch('http://localhost:3000/api/profile', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

  logout = () => {
    return fetch('http://localhost:3000/api/logout', {
      method: 'POST',
      credentials: 'include'
    });
  }

  findUserById = userId =>
    fetch('http://localhost:3000/api/user/' + userId)
      .then(response => response.json())

}
