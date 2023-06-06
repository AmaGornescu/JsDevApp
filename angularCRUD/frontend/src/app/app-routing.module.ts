import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'prima-pagina', component: HomeComponent },
  { path: 'myadmin', component: AdminComponent },

  { 
    path: 'profil/:id', 
    component:ProfilComponent,
    // data: {
    //   title: 'Profil user',
    //   description: 'Profil user info'
    // } 
  },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
