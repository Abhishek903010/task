import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'user',component : MoreInfoComponent
  },
 {
   path:"parent",component: ParentComponent,
   
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }