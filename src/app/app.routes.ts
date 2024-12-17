import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  
    {
        path:"users",
        component: UsersComponent,
        pathMatch: "full"
    },
    {
        path:"about",
        component: AboutComponent,
        pathMatch: "full"
    },
];
