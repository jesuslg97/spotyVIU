import { Component, OnInit } from '@angular/core';

import { Video } from 'src/app/models/video';
import { Programacion } from 'src/app/models/programacion';

@Component({
  selector: 'app-programing',
  templateUrl: './programing.component.html',
  styleUrls: ['./programing.component.css']
})
export class ProgramingComponent implements OnInit {

  public programacion:Array<Programacion>;
  public playing: string;

  constructor() { 
    this.programacion = [
      new Programacion('Angular',
        [ 
          new Video('Introduccion a Angular','Javi ','https://cdn.pixabay.com/vimeo/268112389/Calle%20-%2015979.mp4?width=1280&expiry=1659292730&hash=ac0721c5a9ca227574797f72eb73d922cfd2dc5b'),
          new Video('Desarollando una app en Angular','Gustavo','https://cdn.pixabay.com/vimeo/645084454/Industrial%20-%2095462.mp4?width=1280&expiry=1659292743&hash=f646052843a1685a9c3fe79164fc261c6e6e1d85'),
        
        ]
      )

      
    ];

    this.playing = "";

  }

  ngOnInit(): void {

  }

  
  public playVideo(video: Video):void {
    this.playing = video.title + ' subido por ' +video.autor;
    let videoPlayer = document.getElementById("videoProgramingPlayer");
    videoPlayer?.setAttribute("src", video.link);
    
  }

}
