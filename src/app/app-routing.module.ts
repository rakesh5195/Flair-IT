import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ProductsComponent } from './modules/products/components/products/products.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductDetailComponent } from './modules/products/components/product-detail/components/product-detail/product-detail.component';


const routes: Routes = [

  {
    path: 'pages',
    component: FullLayoutComponent,
    data: {
      title: 'pages'
    },
    canActivate:[AuthGuardService],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      { path: "products",
       component: ProductsComponent,
        canActivate: [AuthGuardService] 
      }, 
      { 
        path: "product-create",
       component: ProductDetailComponent,
       canActivate: [AuthGuardService]
       },

      { 
        path: "product-update/:id", 
      component: ProductDetailComponent,
       canActivate: [AuthGuardService] 
      }
    ]
  },

  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'login'
    },
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
