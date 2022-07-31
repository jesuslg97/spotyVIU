import { Component, OnInit } from '@angular/core';

import { Video } from 'src/app/models/video';
import { Videojuego } from 'src/app/models/videojuego';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {

  public videojuegos:Array<Videojuego>;
  public playing: string;

  constructor() {

    this.videojuegos = 
    [
      new Videojuego('Nintendo',
        [
          new Video('Pokemon Amarillo','Junichi Masuda','../../assets/videos/pokemon.mp4'),
          new Video('Super Mario Bros',' Shigeru Miyamoto','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
          
        ]
      ),

      new Videojuego('Activision',
        [
          new Video('Call of Duty','Mohammad Alavi','../../assets/videos/disparos.mp4'),
       
          
        ]  
      )


    ];
    
    this.playing = "";
   }

  ngOnInit(): void {
    
  }

  public playVideo(video: Video):void {
    this.playing = video.title + ' creado por ' +video.autor;
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer?.setAttribute("src", video.link);
    
  }

}
