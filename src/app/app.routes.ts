import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { StartersComponent } from './starters/starters.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'starters', component: StartersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', component: TasksComponent }
];


