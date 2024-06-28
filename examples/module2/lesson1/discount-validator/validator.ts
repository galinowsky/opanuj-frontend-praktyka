export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];
  if(typeof firstName !== 'string' || typeof lastName !== 'string') {
    errors.push('First name should be string');
    errors.push('Last name should be string');
  }
  if(typeof age !== 'number') {
    errors.push('Age must be a number');
  }
  if (!firstName) {
    errors.push('First name is required');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (firstName.length < 2) {
    errors.push('First name should be at least 2 characters long');
  }

  

  return errors;
}
