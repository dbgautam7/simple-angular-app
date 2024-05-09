// import { Injectable, inject } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
// import { exhaustMap, take, tap } from 'rxjs/operators';
// import { AuthService } from './auth.service';

// export class AuthInterceptorService implements HttpInterceptor{
//     authService: AuthService = inject(AuthService);

//     intercept(req: HttpRequest<any>, next: HttpHandler){
//         return this.authService.user.pipe(take(1), exhaustMap(user => {
//             console.log(user, "user");
//             console.log("Interceptor called");
//             if(!user){
//                 return next.handle(req);
//             }
//             const modifiedReq = req.clone({
//                 params: new HttpParams().set('auth', user.token
//             )})
//             return next.handle(modifiedReq)
//         }));
//     }
// }

import { HttpInterceptorFn, HttpParams } from '@angular/common/http'
import { AuthService } from './auth.service'
import { inject } from '@angular/core'
import { exhaustMap, take } from 'rxjs'

export const AuthInterceptorService: HttpInterceptorFn = (req, next) => {
  console.log('interceptor called')
  console.log(req, "request");
  const authService:AuthService=inject(AuthService)
          return authService.user.pipe(take(1), exhaustMap(user => {
            if(!user){
                return next(req);
            }
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token,
               
            ),
            headers: req.headers.set(
              'Authorization',
              `Bearer ${user.token}`
            )})
            return next(modifiedReq)
        }));
  
}