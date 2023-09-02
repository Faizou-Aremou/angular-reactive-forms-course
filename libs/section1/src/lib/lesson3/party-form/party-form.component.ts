import { Component, OnInit } from '@angular/core';
import { Hero } from '../../lesson2/completed/lesson2-completed-hero-form/lesson2-completed-hero-form.component';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { animations } from '@forms-course/ui-common';
import {
  HeroForm,
  StatsForm,
} from '../../lesson2/hero-form/hero-form.component';

export interface Party {
  name: string;
  partySize: number;
  heroes: Hero[];
}

export interface PartyForm {
  name: FormControl<string>;
  partySize: FormControl<number>;
  heroes: FormArray<FormGroup<HeroForm>>;
}

const createHero = (): Hero => ({
  name: '',
  stats: {
    attack: 0,
    defense: 0,
    speed: 0,
    health: 0,
  },
});

const createHeroForm = (hero?: Hero): FormGroup =>
  new FormGroup({
    name: new FormControl(hero ? hero.name : ''),
    stats: new FormGroup({
      attack: new FormControl(hero ? hero.stats.attack : 0),
      defense: new FormControl(hero ? hero.stats.defense : 0),
      speed: new FormControl(hero ? hero.stats.speed : 0),
      health: new FormControl(hero ? hero.stats.health : 0),
    }),
  });

@Component({
  selector: 'forms-course-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.css'],
  animations,
})
export class PartyFormComponent implements OnInit {
  partyForm = new FormGroup<PartyForm>({
    name: new FormControl<string>(''),
    partySize: new FormControl<number>(0),
    heroes: new FormArray<FormGroup<HeroForm>>([]),
  });
  possiblePartySizes = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {
    this.partySize.valueChanges.pipe().subscribe((size) => {
      this.updateHeroesToNewSize(size);
    });
  }

  get heroes() {
    return this.partyForm.get('heroes') as FormArray<FormGroup<HeroForm>>;
  }
  get partySize() {
    return this.partyForm.get('partySize') as FormControl<number>;
  }

  private updateHeroesToNewSize(size: number): void {
    if (size > this.heroes.length) {
      new Array(size - this.heroes.length)
        .fill(
          new FormGroup<HeroForm>({
            name: new FormControl<string>(''),
            stats: new FormGroup<StatsForm>({
              attack: new FormControl<number>(0),
              defense: new FormControl<number>(0),
              speed: new FormControl<number>(0),
              health: new FormControl<number>(0),
            }),
          })
        )
        .forEach((formArray) => this.heroes.push(formArray));
    } else if (size < this.heroes.length) {
      new Array(this.heroes.length - size)
        .fill(undefined)
        .forEach((formArray) => this.heroes.removeAt(this.heroes.length - 1));
    }
  }
}
