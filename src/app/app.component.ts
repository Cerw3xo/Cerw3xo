import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Team } from './models/team';
import { TeamComponent } from './teamPage/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule, TeamComponent],
  // declarations: [TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
  test?: number;
  teamData?: Team = undefined;

  constructor() {
    this.test = 9;
    var result = 2 + this.test;
    console.log(result);
    console.log(this.teamData?.team.name);
  }

  // constructor(private httpClient: HttpClient) {
  //   this.httpClient
  //     .get<any>(
  //       'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/16'
  //     )
  //     .subscribe((x) => {
  //       console.log(x);
  //       this.teamData = x;
  //     });
  // }
}
