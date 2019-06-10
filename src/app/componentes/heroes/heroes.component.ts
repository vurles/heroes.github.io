import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroes[] = [];

  constructor( private _heroesService:HeroesService,
               private _router:Router
    )  { 
 console.log('constructor');

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes);

  }
  verHeroe( idx:number ){
    //console.log(idx);
    this._router.navigate( ['/heroe',idx] )
  }

}
