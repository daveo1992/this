import { Component, OnInit } from '@angular/core';
import {TeamServiceService} from '../Service/teamService.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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