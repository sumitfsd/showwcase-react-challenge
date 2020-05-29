import isStringEmpty from '../../helpers/textValidators';

const validate = (formValues, requiredFields, errors = []) => {
  Object.keys(formValues).forEach((key) => {
    if (requiredFields.includes(key) && isStringEmpty(formValues[key]))
      errors.push(`${key} can not be empty`);
  });
  return errors;
};

export default validate;
