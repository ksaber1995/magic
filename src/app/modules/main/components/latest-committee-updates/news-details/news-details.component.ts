import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../../../model/post';
import { SwaggerService } from '../../../../../swagger/swagger.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent implements OnInit {
  post: Post;
  breadCrumbs;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute, private swagger: SwaggerService) {}

  ngOnInit(): void {
    this.swagger.getOnePost(this.id).subscribe((post) => {
      this.post = post;
      this.breadCrumbs = [
        {
          label: 'بوابة البرامج',
          url: '/',
        },
        {
          label: ' ادارة آخر مستجدات اللجنة ',
          url: '/main/committee-updates-list',
        },
        { label: post.title },
      ];
    });
  }
}
