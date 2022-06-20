import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { SessionsComponent } from './pages/sessions/sessions.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'session', component:SessionsComponent},
  {path:'play', component:PlayComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
