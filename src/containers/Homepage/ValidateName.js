import isStringEmpty from '../../helpers/textValidators';

const validateName = (name, errors = []) => {
  if (isStringEmpty(name)) {
    errors.push('Name can not be empty');
  }
  return errors;
};

export default validateName;
