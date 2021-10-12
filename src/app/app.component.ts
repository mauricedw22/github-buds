import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/landio.css']
})
export class AppComponent implements OnInit {
  title = 'github-app';
  username: string = "";
  data: any;
  result: any;
  public isButtonVisible = false;

  constructor(private githubService: GithubApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
      this.githubService.getUserData(this.username).subscribe((res)=>{
      console.log('Using Github API to search for ' + this.username + "'s profile.");
      this.data = JSON.stringify(res);
      this.result = JSON.parse(this.data);
      console.log(this.result);
      this.isButtonVisible = true;
   });
  }

}
