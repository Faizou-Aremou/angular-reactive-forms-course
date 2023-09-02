import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-simple-dynamic-array',
  templateUrl: './simple-dynamic-array.component.html',
  styleUrls: ['./simple-dynamic-array.component.css'],
})
export class SimpleDynamicArrayComponent implements OnInit {
  formArray = new FormArray<FormControl<any>>([]);
  constructor() {}

  ngOnInit() {}

  addControl() {
    this.formArray.push(new FormControl<any>(''));
  }

  removeControl(index: number) {
    this.formArray.removeAt(index);
  }
}
