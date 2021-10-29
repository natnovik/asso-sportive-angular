import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymListComponent } from './gymnasePage/gym-list/gym-list.component';

const routes: Routes = [
  { path: "all", component: GymListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
