import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-making-forms-dynamic',
  templateUrl: './making-forms-dynamic.component.html',
  styleUrls: ['./making-forms-dynamic.component.css'],
})
export class MakingFormsDynamicComponent {
  favoriteColor = new FormControl<string>('Blue');
  colors = ['Blue', 'Red', 'White', 'Orange', 'Purple', 'Yellow', 'Chartreuse'];
  colorsControl = new FormControl<string>(this.colors.join(', '));
  constructor() {
    this.colorsControl.valueChanges.subscribe((value) => {
      this.colors = value
        .split(', ')
        .filter((value) => value !== '');
    });
  }
}
