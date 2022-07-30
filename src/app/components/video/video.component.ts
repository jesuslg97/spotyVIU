import { Component, OnInit, Input } from '@angular/core';

import { Video } from 'src/app/models/video';
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() public video:Video = new Video("","","");
  @Output() public videoToPlay = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  play(event: Event, video: Video) {
    this.videoToPlay.emit(video);
  }

}
