import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/core/components/auth/auth.module').then(
        (m) => m.AuthModule
      )
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
