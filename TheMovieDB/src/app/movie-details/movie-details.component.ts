import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/Movie';
import { Title } from '@angular/platform-browser';
import {MovieInfoComponent} from 'src/app/movie-info/movie-info.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  Details: MovieInfoComponent;

  constructor() { }

  ngOnInit() {
  }

}
