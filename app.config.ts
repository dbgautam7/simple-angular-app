import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { LoggingInterceptorService } from './Services/logging-interceptor.servive';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),   
    provideHttpClient(
      withInterceptors([AuthInterceptorService, AuthInterceptorService]),
    ),
    provideRouter(routes),
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true},]
};
