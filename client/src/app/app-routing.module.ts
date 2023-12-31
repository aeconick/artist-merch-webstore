import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { CreateItemPageComponent } from './components/pages/create-item-page/create-item-page.component';
import { AdminGuard } from './auth/guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'item/:id', component: ItemPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'track/:orderId',
    component: OrderTrackPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:userId',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateItemPageComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
