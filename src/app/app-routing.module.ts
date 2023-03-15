import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './posts/posts.component'
import {CreateComponent} from './posts/create/create.component'
import {UpdateComponent} from './posts/update/update.component'
const routes: Routes = [
 { path:'',component:PostsComponent},
 { path:'create',component:CreateComponent},
 { path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
