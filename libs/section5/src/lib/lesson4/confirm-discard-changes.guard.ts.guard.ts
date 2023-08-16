import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WizardFormComponent } from '../lesson2/wizard-form/wizard-form.component';
import { WizardComponent } from '../wizard/wizard.component';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDiscardChangesGuard
   {
  canDeactivate(component: WizardComponent): Observable<boolean> {
    return component.canDeactivate();
  }
}
