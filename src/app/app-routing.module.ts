import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketComponent } from './rocket/rocket.component';
import { RocketlistComponent } from './rocketlist/rocketlist.component';
import { ManageComponent } from './manage/manage.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RocketlistComponent
  },
  {
    path: 'rocket',
    component: RocketComponent
  },
  {
    path: 'create',
    component: ManageComponent
  },
  {
    path: 'update/:id',
    component: ManageEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
