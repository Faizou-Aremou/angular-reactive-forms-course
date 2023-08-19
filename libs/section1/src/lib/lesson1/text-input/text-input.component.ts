import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, startWith, takeUntil } from 'rxjs';

const MY_FIRST_NAME = 'Faïzou';
const MY_LAST_NAME = 'AREMOU';
@Component({
  selector: 'forms-course-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit, OnDestroy {
  history: string[] = [];
  control = new FormControl<string>('');
  private _destroying$ = new Subject<void>();
  constructor() {}

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntil(this._destroying$), startWith(this.control.value))
      .subscribe((value) => {
        this.history = [value, ...this.history];
      });
  }

  ngOnDestroy() {
    this._destroying$.next();
  }

  setFormToMyName(): void {
    this.control.setValue(`${MY_FIRST_NAME} ${MY_LAST_NAME}`);
  }

  toggleFormEnabled() {
    if (this.control.disabled) {
      this.control.enable({ emitEvent: false });
    } else {
      this.control.disable({ emitEvent: false });
    }
  }

  clearHistory() {
    this.history = [];
  }
}
