import { Component, Input, OnInit } from '@angular/core';

import { Song } from "../../models/song";
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() public song:Song = new Song(0, "", "", "");
  @Output() public songToPlay = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  play(event: Event, song: Song) {
    this.songToPlay.emit(song);
  }

}
