import { FormArray, ValidatorFn } from "@angular/forms";

export function atLeastOneCheckboxIsChecked() {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const isOneSelected = formArray.value.includes(true);
    return isOneSelected ? null : { required: true };
  };
  return validator;
}
