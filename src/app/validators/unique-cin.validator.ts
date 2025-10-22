import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map, of } from "rxjs";
import { CvService } from "../cv/services/cv.service";

export const uniqueCinValidator = (cvService: CvService) => {

  return (control: AbstractControl)  => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService
      .selectByProperty('cin', cin)
      .pipe(
        map((cvs) =>
          cvs.length > 0
            ? { uniqueCin: `Le cin doit être unique, ce cin existe déjà` }
            : null
        )
      );
  }
}
