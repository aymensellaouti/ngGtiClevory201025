import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { cvsResolver } from './resolvers/cvs.resolver';

export const CV_ROUTES: Routes = [
  {
    //cv/list
    path: 'cv',
    children: [
      //list
      { path: '', component: CvComponent },
      { path: 'add', component: AddCvComponent, canActivate: [authGuard] },
      {
        resolve: {
          // Rahou 9bal ma trouti t3ada bel cvsResolver taw imedlek 9dhaya
          cvs: cvsResolver,
        },
        path: 'list',
        component: MasterDetailsComponent,
        children: [{ path: ':id', component: DetailsCvComponent }],
      },
      { path: ':id', component: DetailsCvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
