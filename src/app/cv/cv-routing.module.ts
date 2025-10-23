import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';

import { CvComponent } from './cv/cv.component';


import { cvsResolver } from './resolvers/cvs.resolver';

export const CV_ROUTES: Routes = [
      //list
      { path: '', loadComponent: () => import('./cv/cv.component').then(m => m.CvComponent) },
      { path: 'add', loadComponent: () => import('./add-cv/add-cv.component').then(m => m.AddCvComponent), canActivate: [authGuard] },
      {
        resolve: {
          // Rahou 9bal ma trouti t3ada bel cvsResolver taw imedlek 9dhaya
          cvs: cvsResolver,
        },
        path: 'list',
        loadComponent: () => import('./master-details/master-details.component').then(m => m.MasterDetailsComponent),
        children: [{ path: ':id', loadComponent: () => import('./details-cv/details-cv.component').then(m => m.DetailsCvComponent) }],
      },
      { path: ':id', loadComponent: () => import('./details-cv/details-cv.component').then(m => m.DetailsCvComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
