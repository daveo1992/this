//This is the service page the search functionusses to access the data that was hand coded

import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Team } from '../app/data/user.data';

@Injectable()
export class UserService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchUsers(): Observable<any> {
    return of(Team);
  }
}