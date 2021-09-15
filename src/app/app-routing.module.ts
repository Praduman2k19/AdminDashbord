import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { TableComponent } from './shared/widgets/table/table.component';

const routes:Routes=[
  {
    path:'',component:DefaultComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'posts',component:PostsComponent},
      {path:'table',component:TableComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
