import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/auth/dashboard/dashboard.component';

//authentication
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from 'src/app/auth/forgot-password/forgot-password.component';
import { VerifyComponent } from 'src/app/auth/verify/verify.component';

//Buy 
import { AllModulesComponent } from 'src/app/buy/all-modules/all-modules.component';

//pages
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, data: {title: 'Home'} },

	
	{ path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },

	//authentication
	{ path: 'sign-in', component: SignInComponent, data: {title: 'Sign In'} },
	{ path: 'sign-up', component: SignUpComponent, data: {title: 'Sign Up'} },
	{ path: 'verify', component: VerifyComponent, data: {title: 'Verify'} },
	{ path: 'forgot-password', component: ForgotPasswordComponent, data: {title: 'Forgot Password'} },

	//buy
	{ path: 'all-modules', component: AllModulesComponent, data: {title: 'All Modules'} },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
