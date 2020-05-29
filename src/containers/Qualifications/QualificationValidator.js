import { isStringEmpty } from '../../helpers/textValidators'

export const validate = (formValues, requiredFields, errors = []) => {
  Object.keys(formValues).forEach(key => {
    if (requiredFields.includes(key) && isStringEmpty(formValues[key]))
      errors.push(`${key} can not be empty`)
  })
  return errors
} 