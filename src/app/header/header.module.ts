import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../components/dashboard/Dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { ExploreComponent } from '../components/explore/explore.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HeaderComponent } from './header.component';
// import { HomeComponent } from './navbar/home/home.component';
// import { ExploreComponent } from './navbar/explore/explore.component';
// import { ChatComponent } from './navbar/chat/chat.component';
// import { ProfileComponent } from './navbar/profile/profile.component';
// import { DashboardComponent } from './navbar/dashboard/Dashboard.component';
// import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/home', component: HomeComponent },
    { path: 'dashboard/explore', component: ExploreComponent },
    { path: 'dashboard/chat', component: ChatComponent },
    { path: 'dashboard/profile', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class HeaderModule { }
