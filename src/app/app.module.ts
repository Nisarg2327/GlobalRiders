import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './components/dashboard/dashboard.service';
import { HeaderModule } from './header/header.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from './components/components.module';
import { SignUpService } from './auth/sign-up/sign-up.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
    ],
    providers: [DashboardService, SignUpService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        ButtonModule,
        TagModule,
        HeaderModule,
        AuthModule,
        ComponentsModule
    ]
})
export class AppModule { }
