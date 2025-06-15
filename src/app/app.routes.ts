import { Routes } from '@angular/router';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';
import { Comp3Component } from './comp-3/comp-3.component';
import { Comp4Component } from './comp-4/comp-4.component';
import { Comp5Component } from './comp-5/comp-5.component';
import { Comp6Component } from './comp-6/comp-6.component';
import { Comp7Component } from './comp-7/comp-7.component';
import { Comp8Component } from './comp-8/comp-8.component';

export const routes: Routes = [
  { path: 'comp1', component: Comp1Component, pathMatch: 'full' },
  { path: 'comp2', component: Comp2Component, pathMatch: 'full' },
  { path: 'comp3', component: Comp3Component, pathMatch: 'full' },
  { path: 'comp4', component: Comp4Component, pathMatch: 'full' },
  { path: 'comp5', component: Comp5Component, pathMatch: 'full' },
  { path: 'comp6', component: Comp6Component, pathMatch: 'full' },
  { path: 'comp7', component: Comp7Component, pathMatch: 'full' },
  { path: 'comp8', component: Comp8Component, pathMatch: 'full' },
];
