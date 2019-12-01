import { Component, OnInit } from '@angular/core';
import {TeamServiceService} from '../Service/teamService.service';
import{Router, ActivatedRoute} from'@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
MyTeams: any = [];
  constructor (private teamService: TeamServiceService) { }

  
  ngOnInit() {
  this.teamService.GetTeamInformation().subscribe((data)=>{
this.MyTeams = data.teams;
console.log(this.MyTeams);  
})
}
onDelete(id:String){
  console.log("Deleting team with id: "+id);
  this.teamService.DeleteTeam(id).subscribe(
    ()=>
    {
      this.ngOnInit();
    }
  );
  
  }
}
