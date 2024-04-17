import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../components/dashboard/Dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { ExploreComponent } from '../components/explore/explore.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ProfileComponent } from '../components/profile/profile.component';

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
    declarations: [DashboardComponent],
    imports: [RouterModule.forRoot(appRoutes),
        CarouselModule],
    exports: [RouterModule]
    
})
export class ComponentsModule { }
