import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/Movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

movie: Movie = {
  title: "dragon",
  thumbnail: 'test',
  Rating: 22,
  ShortDescription: 'Lorem Ipsum',
  Runtime: 99,
  ReleaseDate: 'test'
};

  constructor() { }

  ngOnInit() {
  }

}
