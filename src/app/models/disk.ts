import { Song } from "./song";

export class Disk{

  constructor(
    public title: string,
    public artist: string,
    public year: number,
    public image: string,
    public songs: Array<Song>
  ) {}

}
