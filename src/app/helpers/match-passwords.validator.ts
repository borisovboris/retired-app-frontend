import { AbstractControl, FormGroup } from '@angular/forms';

export function MatchPasswords(c: AbstractControl) {
       
       const password = c.get('password');
       const confirmPassword = c.get('confirmPassword');

       if(confirmPassword?.errors && !confirmPassword.errors.passwordMatch) {
           return;
       }
       
       if(password?.value !== confirmPassword?.value) {
           confirmPassword?.setErrors({passwordMatch: true});
       } else {
           confirmPassword?.setErrors(null);
       }


    }
