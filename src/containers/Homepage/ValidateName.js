import { isStringEmpty } from '../../helpers/textValidators'

export const validateName = (name, errors = []) => {
  if (isStringEmpty(name)) {
    errors.push('Name can not be empty')
  }
  return errors
} 