import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent}
=======
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent}
>>>>>>> 25d30f00cdbe09f1753e074d9120ff0b35b11eda
];
