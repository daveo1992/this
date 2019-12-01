import { Component, OnInit } from '@angular/core';
import{ NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {TeamServiceService} from '../Service/teamService.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
team:any=[];
  constructor(private teamService:TeamServiceService, private router:Router,
   private route:ActivatedRoute ) { }

  ngOnInit() {
    this.teamService.GetTeam(this.route.snapshot.params['id']).subscribe(
(data)=>{
  this.team = data;
  console.log(this.team);
}
    );
  }

  onEditTeam(form:NgForm){
    console.log(form.value.name);
    this.teamService.UpdateTeam(this.team._id, form.value.name,
      form.value.points, form.value.stadium).subscribe();
    }
  }

