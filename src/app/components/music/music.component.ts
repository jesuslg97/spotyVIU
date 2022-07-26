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
      new Disk("Canarios para el mundo", "Quevedo", 2021, "https://geniuslyrics.net/i/bands/350/quevedo.jpg",
        [
          new Song(1, "Cayo la noche", "Quevedo", "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"),
          new Song(2, "Universitaria", "Quevedo", "https://cdn.pixabay.com/audio/2022/07/14/audio_b2e1adaa25.mp3"),
          new Song(3, "Nonstop", "Quevedo", "https://cdn.pixabay.com/audio/2022/06/27/audio_d1eeb72cda.mp3"),
          new Song(4, "Piel de cordero", "Quevedo", "https://cdn.pixabay.com/audio/2022/05/05/audio_1395e7800f.mp3"),
          new Song(5, "Ahora y siempre", "Quevedo", "https://cdn.pixabay.com/audio/2022/06/28/audio_ffe4e508f3.mp3"),
        ]
      ),
      new Disk("Un verano sin ti", "Bad Bunny", 2022, "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
        [
          new Song(1, "Me porto bonito", "Bad Bunny", "https://cdn.pixabay.com/audio/2022/05/23/audio_e341a2c57a.mp3"),
          new Song(2, "Después de la playa", "Bad Bunny", "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3"),
          new Song(3, "La corriente", "Bad Bunny", "https://cdn.pixabay.com/audio/2022/06/06/audio_6e6377ef2d.mp3"),
          new Song(4, "Aguacero", "Bad Bunny", "https://cdn.pixabay.com/audio/2022/03/23/audio_07b2a04be3.mp3"),
          new Song(5, "Tarot", "Bad Bunny", "https://cdn.pixabay.com/audio/2022/05/27/audio_5b08ce8e20.mp3"),
        ]
      ),
      new Disk("Legendaddy", "Daddy Yankee", 2022, "https://linkstorage.linkfire.com/medialinks/images/3de4031e-0aac-4e18-89f1-c35561e1ccb9/artwork-440x440.jpg",
        [
          new Song(1, "Pasatiempo", "Daddy Yankee", "https://cdn.pixabay.com/audio/2021/11/25/audio_91b32e02f9.mp3"),
          new Song(2, "Campeón", "Daddy Yankee", "https://cdn.pixabay.com/audio/2022/01/12/audio_45cacdef8f.mp3"),
          new Song(3, "Remix", "Daddy Yankee", "https://cdn.pixabay.com/audio/2022/06/22/audio_cde8d21390.mp3"),
          new Song(4, "La ola", "Daddy Yankee", "https://cdn.pixabay.com/audio/2021/11/24/audio_c3dfe250e3.mp3"),
          new Song(5, "X última vez", "Daddy Yankee", "https://cdn.pixabay.com/audio/2021/12/13/audio_b9c0dc9e48.mp3"),
        ]
      ),
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
