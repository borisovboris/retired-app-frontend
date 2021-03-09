import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const tokenId = localStorage.getItem("token_id");

        if(tokenId) {
            const cloned = req.clone({
                headers: req.headers.set(
                    "Authorization",
                    "Bearer " + tokenId
                )
            });

            console.log(cloned);
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }

    }
}