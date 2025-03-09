import { Component } from '@angular/core';

interface News {
  name:string,
  imagePath:string, 
  id:string
}

@Component({
  selector: 'app-committee-updates-list',
  templateUrl: './committee-updates-list.component.html',
  styleUrl: './committee-updates-list.component.scss'
})
export class CommitteeUpdatesListComponent {
  newsList : News[] =[
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news1.jpg',
      id:'555'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news2.jpeg',
      id:'55d55'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news3.jpeg',
      id:'55d55'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news1.jpg',
      id:'555d5'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news2.jpeg',
      id:'5a555'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news3.jpeg',
      id:'555fd5'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news1.jpg',
      id:'555afd5'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news2.jpeg',
      id:'55as55'
    },
    {
      name:'استراتيجية إعادة الغطاء النباتي',
      imagePath:'assets/images/news3.jpeg',
      id:'555fd5'
    },
  ]
}
