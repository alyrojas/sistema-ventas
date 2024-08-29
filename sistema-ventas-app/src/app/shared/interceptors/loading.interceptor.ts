import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHandlerFn} from '@angular/common/http';
import { finalize, Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { inject } from '@angular/core';

var countRequest = 0;

export function loadingInterceptor(req:HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  countRequest++;
  const spinner = inject(NgxSpinnerService);
  spinner.show();

  return next(req).pipe(finalize(() => {
    countRequest--;
    if(!countRequest){
      spinner.hide();
    }
  }));
}

// @Injectable({
//   providedIn: "root"
// })
// export class LoadingInterceptor implements HttpInterceptor{
  
//   private countRequest = 0;
//   constructor(private spinner: NgxSpinnerService){}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//       console.log("Loading::Interceptor");
//       this.spinner.show();
//       this.countRequest++;
//       return next.handle(req).pipe(finalize(() => {
//         this.countRequest--;
//         if(!this.countRequest){
//           this.spinner.hide();
//         }
//       }));
//   }
// }
