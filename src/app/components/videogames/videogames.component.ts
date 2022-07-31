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
          new Video('Pokemon Amarillo','Junichi Masuda','https://cdn.pixabay.com/vimeo/180289993/Pokemon%20-%204800.mp4?width=1280&expiry=1659292520&hash=5d93e7bd42e3220e720878bb5fe095bafe45175f'),
          new Video('Super Mario Bros',' Shigeru Miyamoto','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
          
        ]
      ),

      new Videojuego('Activision',
        [
          new Video('Call of Duty','Mohammad Alavi','https://cdn.pixabay.com/vimeo/158039728/Suspenso%20-%202394.mp4?width=1270&expiry=1659292655&hash=a69224c6184a06fb8684f891e3a5a6845aeb19e3'),
       
          
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
