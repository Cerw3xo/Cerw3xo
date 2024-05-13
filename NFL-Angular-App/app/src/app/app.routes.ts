import { RosterComponent } from './shared/components/roster/roster.component';
import { StadiumComponent } from './stadium/stadium.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './teamPage/team.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'stadium/:id', component: StadiumComponent},
    { path: 'team/:id', component: TeamComponent},
    { path: 'roster/:id', component: RosterComponent},
    { path: '', component: TeamListComponent}
];
