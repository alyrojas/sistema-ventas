import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core'; 
import { AuthService } from '../../pages/auth/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.headers.get('requireToken')) {
    const authService = inject(AuthService); 
    const token = authService.tokenValue;

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          auth: `${token}`,
        },
      });
      return next(authReq);
    }
  }
  return next(req); 
};