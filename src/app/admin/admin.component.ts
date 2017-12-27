import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.component.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  private news: News[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get('news/get_all').subscribe((response) => {
      this.news = response.json();
    });
  }
}
