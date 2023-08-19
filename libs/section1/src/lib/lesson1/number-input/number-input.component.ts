import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, startWith, takeUntil } from 'rxjs';

const UPPER_NUMBER = 30;
const LOWER_NUMBER = 5;
const INITIAL_VALUE = 20;
@Component({
  selector: 'forms-course-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent implements OnInit, OnDestroy {
  history: number[] = [];
  control = new FormControl<number>(INITIAL_VALUE, { updateOn: 'blur' });
  private _destroying$ = new Subject<void>();
  constructor() {}
  ngOnDestroy(): void {
    this._destroying$.next();
  }

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntil(this._destroying$), startWith(this.control.value))
      .subscribe((value) => {
        if (value > UPPER_NUMBER) {
          this.control.setValue(UPPER_NUMBER);
        } else if (value < LOWER_NUMBER) {
          this.control.setValue(LOWER_NUMBER);
        }

        this.history = [...this.history, value];
      });
  }
  clearHistory() {
    this.history = [];
  }
}
