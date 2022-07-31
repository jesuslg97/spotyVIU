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
          new Video('Introduccion a Angular','Javi ','../../assets/videos/campo.mp4'),
          new Video('Desarollando una app en Angular','Gustavo','../../assets/videos/edimburgo.mp4'),
        
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
