/*this is that page that the nav bar uses to create buttons to access every page on the applicatio.*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadComponent} from './read/read.component';
import{CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import { HomepageComponent } from './homepage/homepage.component';
import{SearchComponent} from './search/search.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import{ LocationComponent} from './location/location.component';
const routes: Routes = [
  {path: 'read',
  component: ReadComponent
  },
{
  path:'create',
  component: CreateComponent
},
{
  path:'edit/:id',
  component: EditComponent
},
{
path: 'homepage',
component: HomepageComponent
},
{ path: 'search', loadChildren: './components/user/user.module#UserModule' },

{
  path: 'search1',
  component: SearchComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'location', 
  component: LocationComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
