import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import{TeamServiceService} from '../Service/teamService.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private teamService: TeamServiceService) { }

  ngOnInit() {
  }
onAddTeam(form: NgForm){
  console.log(form.value);

this.teamService.AddTeamInformation(form.value.name,
  form.value.points, form.value.stadium).subscribe();
  console.log(form.value);
  form.resetForm();
}
}
