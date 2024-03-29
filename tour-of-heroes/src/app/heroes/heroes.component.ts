import { Component } from '@angular/core'
import { NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    UpperCasePipe,
    FormsModule,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
  
export class HeroesComponent {
  heroes = HEROES
  selectedHero?: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
