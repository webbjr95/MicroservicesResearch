import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  identifierSearch(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value
      var isValid = false
      const isNullOrEmptyString = value === '' || value === null

      if (value) {
        var expression = /^[0-9]{6}$/;
        isValid = expression.test(value)
      }

      // TODO.JW: If we wanted to showcase the validation message then we have it in place
      return isValid || isNullOrEmptyString ? null : {
        showMsg: true
      };
    };
  }
}
