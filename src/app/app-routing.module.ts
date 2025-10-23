import { Route } from "@angular/router";









export const routes: Route[] = [
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'rh', loadComponent: () => import('./optimizationPattern/rh/rh.component').then(m => m.RhComponent) },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then(
      f =>f.CvModule
    ),
    data: {
      preload: true
    }
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(
      f =>f.TodoModule
    )
  },
  { path: 'products', loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent) },

  {
    path: '',
    loadComponent: () => import('./templates/front/front.component').then(m => m.FrontComponent),
    children: [
      { path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent) },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./templates/admin/admin.component').then(m => m.AdminComponent),
    children: [{ path: 'color', loadComponent: () => import('./components/color/color.component').then(m => m.ColorComponent) }],
  },
  { path: '**', loadComponent: () => import('./components/nf404/nf404.component').then(m => m.NF404Component) },
];
