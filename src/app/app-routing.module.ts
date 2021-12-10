import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/create/edit/edit.component';
import { IndexComponent } from './product/index/index.component';
import { ViewComponent } from './product/view/view.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path:'', component:LoginComponent},

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: "product",
    //canActivate: [AuthGuard],
    loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule),
    
 
  },
 
 

  { path: '**', component: PagenotfoundComponent },

  
  // { path: 'product', redirectTo: 'product/index', pathMatch: 'full'},
 { path: 'product/index', component: IndexComponent },
 { path: 'product/:productId/view', component: ViewComponent },
 { path: 'product/create', component: CreateComponent },
 { path: 'product/:productId/edit', component: EditComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
