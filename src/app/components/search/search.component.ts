//the functionality for the the search /filter page importing values and components from different files 

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})

  export class SearchComponent implements OnInit {
    form: FormGroup;
@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
searchText: string = '';
constructor(private fb: FormBuilder,
private userService: UserService) {}
ngOnInit(): void {
this.buildForm();
}
buildForm(): void {
this.form = this.fb.group({
TeamName: new FormControl(''),
Points: new FormControl(''),
});
}

 search(filters: any): void {
Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
this.groupFilters.emit(filters);
}
  
}