import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
        
    },
    {
        path: 'gallery',
        component: GalaryComponent
        
    },
    {
       
            path: 'register',
            component: RegisterComponent
       
    },
    {
        path: '',
        component: HomeComponent
    },{
        path: '**',
        component: HomeComponent
    }
];
