import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.component.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coachplans',
  templateUrl: './coachplans.component.html',
  styleUrls: ['./coachplans.component.css']
})

export class CoachplansComponent implements OnInit {
  private news: News[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get('news/get_all').subscribe((response) => {
      this.news = response.json();
    });
  }
}