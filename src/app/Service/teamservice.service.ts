import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import{Observable} from 'rxjs';
import {Team} from '../team.model';
@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private http:HttpClient) {}


    GetTeamInformation():Observable<any>{
      return this.http.get('http://localhost:4000/api/teams');
    }

    AddTeamInformation(name:string,points:string,stadium:string):Observable<any>{
      const team:Team = {name:name, points:points, stadium:stadium};
      return this.http.post('http://localhost:4000/api/teams/', team);
    }
 
    DeleteTeam(id:String):Observable<any>{
      return this.http.delete('http://localhost:4000/api/teams/' +id);
    }

    GetTeam(id:String):Observable<any>{
      return this.http.get('http://localhost:4000/api/teams/' +id);
    }
    
    
    UpdateTeam(id:String,name:string, points:string, stadium:string):Observable<any>{
      const team:Team = {name:name, points:points, stadium:stadium};
    console.log("Edit" +id);
    return this.http.put('http://localhost:4000/api/teams/'+id, team);
    
    }
}
