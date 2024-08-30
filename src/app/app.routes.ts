import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';



export const Route: Routes = [
        { path: '', pathMatch: 'full', redirectTo: '/login' }, // Redirection par défaut
        { path: 'login', component: LoginComponent },
        { path: '**', pathMatch: 'full', redirectTo: '/login' } // Redirection pour les routes non définies
      ];
      