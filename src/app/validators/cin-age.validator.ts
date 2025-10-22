import { AbstractControl } from "@angular/forms";

export const cinAgeValidator = (form: AbstractControl) => {
  const cin = form.get('cin')?.value.substring(0,2);
  const age = form.get('age')?.value;

  if (!cin || !age) return null;

  if((age >=60 && cin > 19) || (age<60 && cin < 20))
    return {cinAge: `L'age et la cin ne correspondent pas`}
  return null;
}
