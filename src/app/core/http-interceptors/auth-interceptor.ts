import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const tokenId = localStorage.getItem("token_id");
        const url = this.router.routerState.snapshot.url
        const subjectId = url.split('/')[2];

        if(tokenId) {
            const cloned = req.clone({
                headers: req.headers.set(
                    "Authorization",
                    "Bearer " + tokenId
                ).set(
                    "Subject-id",
                    `${subjectId}`
                )
            });

            console.log(cloned);
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }

    }
}