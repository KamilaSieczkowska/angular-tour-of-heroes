import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Batman',
        image: '/assets/images/batman.png',
        desc: 'ten ziomek od nietoperzy'
      },
      {
        id: 2,
        name: 'Flash',
        image: '/assets/images/flash.png',
        desc: 'ten ziomek od nietoperzy'
      },
      {
        id: 3,
        name: 'Hulk',
        image: '/assets/images/hulk.png',
        desc: 'ten ziomek od nietoperzy'
      },
      {
        id: 4,
        name: 'Joker',
        image: '/assets/images/joker.png',
        desc: 'ten ziomek od nietoperzy'
      },
      {
        id: 5,
        name: 'Thor',
        image: '/assets/images/thor.png',
        desc: 'ten ziomek od nietoperzy'
      },
      {
        id: 6,
        name: 'Wolverine',
        image: '/assets/images/wolverine.png',
        desc: 'ten ziomek od nietoperzy'
      }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}