import { Component, OnInit } from '@angular/core';
import { AwwService } from '../service/aww.service';
import { Post } from '../interface/post'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  posts;

  constructor(private awwService: AwwService) { }


  ngOnInit(): void {
    this.awwService.getAwwData().subscribe((response:any) => {
      console.log(response.data.children);
      this.posts = response.data.children;
    })
  }

}
