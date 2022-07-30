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
          new Video('Pokemon Amarillo','Junichi Masuda','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
          new Video('Super Mario Bros',' Shigeru Miyamoto','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
          new Video('The Legend of Zelda: Breath of the Wild','Eiji Aonuma','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4')
          
        ]
      ),

      new Videojuego('Activision',
        [
          new Video('Call of Duty','Mohammad Alavi',''),
          new Video('Crash Bandicoot','Jason Rubin',''),
          new Video('Spyro ','Alex Hastings','')
          
        ]  
      ),

      new Videojuego('Blizzard',
        [
          new Video('World of Warcraft','Jeffrey Kaplan',''),
          new Video('Overwatch','Jeremy Craig',''),
          new Video('Hearthstone',' Ben Brode','')
          
        ]  
      ),

      new Videojuego('Electronic Arts',
        [
          new Video('FIFA','Electronic Arts',''),
          new Video('Los Sims','Will Wright',''),
          new Video('Need for Speed: Carbon',' Andy Tudor','')
          
        ]  
      ),


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
