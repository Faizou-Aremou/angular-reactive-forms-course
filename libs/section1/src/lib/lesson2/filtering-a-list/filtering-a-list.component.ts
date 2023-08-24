import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

type Employee = 'Zack' | 'Jeff' | 'Victor';

interface Task {
  name: string;
  assignedTo: Employee | null;
}

interface FormValue {
  showOnlyUnassignedTickets: boolean;
  nameFilter: string;
}
interface TaskFomGroup {
  nameFilter: FormControl<string>;
  showOnlyUnassignedTickets: FormControl<boolean>;
}

const filterForUnassignedTickets = (
  task: Task,
  { showOnlyUnassignedTickets }: FormValue
): boolean => (showOnlyUnassignedTickets ? !task.assignedTo : true);

const filterByTaskName = (task: Task, { nameFilter }: FormValue): boolean =>
  nameFilter ? task.name.includes(nameFilter) : true;

@Component({
  selector: 'forms-course-filtering-a-list',
  templateUrl: './filtering-a-list.component.html',
  styleUrls: ['./filtering-a-list.component.css'],
})
export class FilteringAListComponent implements OnInit, OnDestroy {
  private _destroying = new Subject<void>();
  taskFilterForm = new FormGroup<TaskFomGroup>({
    nameFilter: new FormControl<string>(''),
    showOnlyUnassignedTickets: new FormControl<boolean>(false),
  });
  tasks: Task[] = [
    { name: 'Create forms course', assignedTo: 'Zack' },
    { name: 'Build file cabinets', assignedTo: 'Zack' },
    { name: 'Run all of Nrwl', assignedTo: 'Jeff' },
    { name: 'Create ground-breaking tech', assignedTo: 'Victor' },
    { name: 'make all the $$$', assignedTo: null },
  ];
  filteredTasks: Task[] = this.tasks;

  constructor() {}

  ngOnInit() {
    this.taskFilterForm.valueChanges
      .pipe(takeUntil(this._destroying))
      .subscribe((formValue) => {
        this.filteredTasks = this.tasks.filter((task) => {
          if (formValue.showOnlyUnassignedTickets) {
            return (
              ((formValue.nameFilter === '' && true) ||
                task.name === formValue.nameFilter) &&
              task.assignedTo === null
            );
          }
          return (
            (formValue.nameFilter === '' && true) ||
            task.name === formValue.nameFilter
          );
        });
      });
  }

  ngOnDestroy() {
    this._destroying.next();
  }
}
