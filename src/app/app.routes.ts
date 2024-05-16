import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { LayoutComponent } from './layout/layout.component';
import { NontechComponent } from './nontech/nontech.component';
import { TechComponent } from './tech/tech.component';
import { WorkalloComponent } from './workallo/workallo.component';

export const routes: Routes = [
    { path:"", redirectTo:"login" , pathMatch:"full" },
    { path: "login" ,component: LoginComponent},
    {
        path:"", component:LayoutComponent,
        children:[
            {path: "home" ,component: HomeComponent},
            {path: "task" ,component: TaskComponent},
            {path: "nontech" ,component: NontechComponent },
            {path: "tech" ,component: TechComponent},
            {path: "workallo" ,component: WorkalloComponent},
        ]
    },
   
];

