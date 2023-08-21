import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'forms-course-other-controls',
  templateUrl: './other-controls.component.html',
  styleUrls: ['./other-controls.component.css']
})
export class OtherControlsComponent implements OnInit {
  radioControl = new FormControl<string>('Blue');
  selectControl = new FormControl<string>('Blue');
  rangeControl = new FormControl<number>(5);
  dateControl = new FormControl<string>('2019-08-13');
  timeControl = new FormControl<string>('09:00');
  colorControl = new FormControl<string>('#0096ff');

  constructor() {}

  ngOnInit() {}
}
