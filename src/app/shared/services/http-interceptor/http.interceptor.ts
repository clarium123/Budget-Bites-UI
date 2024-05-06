import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment as env } from '@budget-bites/env';
import { AuthService } from '../auth/auth.service';
import { CommonService } from '../common/common.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private route: Router, private authService: AuthService, private commonService: CommonService){}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentRoute = this.route.url;
    // if(this.authService.getJwtToken())
    //   {
    //     request = request.clone({ setHeaders : {Authorization: `Bearer ${this.authService.getJwtToken()}`, 'X-Time-Zone':Intl.DateTimeFormat().resolvedOptions().timeZone}})
    //   }
    // Extract the component name from the route (if needed)
    // const componentName = this.extractComponentName(currentRoute);
    // const tracer = this.telemetryService.getTracer();
    // const spanName = request.method + " "+ request.url;
    // const span = tracer.startSpan(spanName, {
    //   attributes: {
    //     'http.method': request.method,
    //     'http.url': request.url,
    //     'service.name': `${env.zipkinServiceName}`,
    //     'span.kind': 'client',
    //     'component': componentName,
    //     'http.route': currentRoute,
    //     'User-Agent': window.navigator.userAgent,
    //   },
    // });
    return next.handle(request).pipe(
      tap({
        next: (next) =>{
          if (next instanceof HttpResponse) {
            //  span.setAttributes({
            //   'http.status_code': next.status.toString(),
            //   // Add more custom attributes here
            // });
            // span.end()
          }
         
        },
       // Operation failed; error is an HttpErrorResponse
        error: (error) =>{
          // span.setAttributes({
          //   'error': true,
          //   'error.message': error?.error?.errorMessage,
          //   'error.errorCode': error?.error?.errorCode,
          //   'error.exceptionMessage': error?.error.exceptionMessage,
          //   'error.timeStamp': error?.error?.timeStamp,
          //   'error.httpStatus': error?.error?.httpStatus,
          //   'error.status': error.status
          //   // Add more custom attributes here
          // });
          // // End the span
          // span.end();
          this.handleError(error);
        } 
      }),
      // Log when response observable either completes or errors
      finalize(() => {        
        // span.end();
        // this.spinner.hide(); // Hide the loader when the request is complete
      })
    );
  }
  handleError(error: HttpErrorResponse) {
    console.log('CatchBlock: ', error?.error?.errorMessage);
    // this.spinner.hide();
    // const errorMessage = error?.error?.errorMessage || FormConstant.ERROR_MESSAGE;
    if(error.status === 401 || error.status === 406){
      this.authService.logOut();
    }
    if(error?.error?.errorMessage){
      this.commonService.warningSnackBar(error?.error?.errorMessage);
    }
    else{
      this.commonService.infoSnackBar("Internal Server Error");
    }
    return throwError(error);
  }

}
