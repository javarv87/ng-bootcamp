import { FormControl, FormGroup } from '@angular/forms';

function emailValidator(control: FormControl): { emailInvalid: boolean } | null {
  const { value } = control;
  const EMAIL_REGEX = new RegExp('^[a-z0-9%_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

  return EMAIL_REGEX.test(value) ? null : {
    emailInvalid: true
  };
}

function passwordMatch(form: FormGroup): { notequal: boolean } | null {
  const password = form.get('password').value;
  const confirmPassword = form.get('confirmPassword').value;

  return password === confirmPassword ? null : {
    notequal: true
  };
}

export { passwordMatch, emailValidator };
