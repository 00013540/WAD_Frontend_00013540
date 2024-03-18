import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CreateComponent} from "./pages/create/create.component";
import {EditComponent} from "./pages/edit/edit.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];
