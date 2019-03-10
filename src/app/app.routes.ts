import {Routes} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';

export const appRoutes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'products'},
  {path: '**', component: NotFoundComponent}
];
