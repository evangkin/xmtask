import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-stream',
  templateUrl: './infinite-stream.component.html',
  styleUrls: ['./infinite-stream.component.scss']
})
export class InfiniteStreamComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    console.log('loaded /');
  }

}
