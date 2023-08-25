import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Hero {
  name: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    health: number;
  };
}
export interface HeroForm {
  name: FormControl<string>;
  stats: FormGroup<StatsForm>;
}

export interface StatsForm {
  attack: FormControl<number>;
  defense: FormControl<number>;
  speed: FormControl<number>;
  health: FormControl<number>;
}
@Component({
  selector: 'forms-course-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  heroForm = new FormGroup<HeroForm>({
    name: new FormControl<string>(''),
    stats: new FormGroup<StatsForm>({
      attack: new FormControl<number>(0),
      defense: new FormControl<number>(0),
      speed: new FormControl<number>(0),
      health: new FormControl<number>(0),
    }),
  });
  constructor() {}
}
