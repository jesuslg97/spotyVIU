import { Component, OnInit } from '@angular/core';

import { Disk } from "../../models/disk";
import { Song } from "../../models/song";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public disks:Array<Disk>;
  public playing: string;

  constructor() {
    this.disks= [
      new Disk("Musica 1", "Cayo la noche", 2021,
        [
          new Song(1, "Cancion1", "quevedo", "https://cdn.pixabay.com/audio/2022/07/14/audio_b2e1adaa25.mp3")
        ]
      )
    ];

    this.playing = "";
  }

  ngOnInit(): void {
  }

  public playSong(song: Song):void {
    this.playing = song.artist + " - " + song.title;
    let audioPlayer = document.getElementById("audioPlayer");
    audioPlayer?.setAttribute("src", song.link);
  }

}
