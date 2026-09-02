import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'RanaCafe — Coffee & Bakery in Lorton, VA',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About — RanaCafe',
  },
  {
    path: 'reviews',
    loadComponent: () => import('./features/reviews/reviews.component').then((m) => m.ReviewsComponent),
    title: 'Reviews — RanaCafe',
  },
  { path: '**', redirectTo: '' },
];
