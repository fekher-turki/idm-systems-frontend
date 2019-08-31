import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {UserService} from './shared/services/user/user.service';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {LanguageTranslationModule} from './shared/modules/language-translation/language-translation.module';
import {AuthGuard} from './shared/guard';
import {TokenInterceptor} from './shared/guard/interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LanguageTranslationModule],
    providers: [UserService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
