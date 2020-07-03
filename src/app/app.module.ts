import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api';
import { FormsService } from './services/form-service';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { HeaderComponent } from './directives/header/header.component';
import { FooterComponent } from './directives/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ProductsModule } from './modules/products/products.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ToastrModule } from 'ngx-toastr';

// import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SidebarComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    ForgotComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ProductsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      // positionClass: 'toast-top-right',
      preventDuplicates: true,
    })

  ],
  providers: [ApiService,FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
