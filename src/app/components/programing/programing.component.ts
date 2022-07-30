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
          new Video('Introduccion a Angular','Javi ','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
          new Video('Desarollando una app en Angular','Gustavo','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
          new Video('Conceptos avanzados de Angular','Adolfo','http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'),
        ]
      ),
        new Programacion('React',
        [ 
          new Video('Introduccion a React','Mario',''),
          new Video('Introduccion a React. Parte 2','Mario',''),
          new Video('Conceptos avanzados de React','Jose Maria',''),
        ],
      ),
      new Programacion('Vue',
        [ 
          new Video('Introduccion a Vue','Sergio',''),
          new Video('Desarollando una app en Vue','Gerard',''),
          new Video('Desplegado una app con Vue','Manolo',''),
        ],
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
