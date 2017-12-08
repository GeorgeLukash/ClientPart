import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.component.model';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
}
)

export class NewsComponent implements OnInit {
    private news: News[] = [];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.get('news/get_all').subscribe((response) => {
            this.news = response.json();
        });
    }

}
