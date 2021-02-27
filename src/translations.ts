import { FormField } from '@oryd/kratos-client'

const translations = {
  'traits.email': {
    title: 'Email',
    position: 1,
  },
  password: {
    title: 'Password',
    position: 2,
  },
  'traits.name.first': {
    title: 'First Name (中文)',
    position: 3,
  },
  'traits.name.last': {
    title: 'Last Name (中文)',
    position: 4,
  },
  'traits.nickname': {
    title: 'English name/nickname',
    position: 5,
  },
  'traits.website': {
    title: 'Website',
    position: 6,
  },
  identifier: {
    title: 'Email',
    position: 0,
  },
  to_verify: {
    title: 'Your @internetapi.cn email address',
    position: 0,
  },
}

type Translations = typeof translations

export const getTitle = (key: string): string =>
  key in translations ? translations[key as keyof Translations].title : key

export const getPosition = (field: FormField) =>
  field.name && field.name in translations
    ? translations[field.name as keyof Translations].position
    : Infinity

// This helper function translates the html input type to the corresponding partial name.
export const toFormInputPartialName = (type: string) => {
  switch (type) {
    case 'hidden':
      return 'form_input_hidden'
    case 'password':
      return 'form_input_password'
    case 'submit':
      return 'form_field_button'
    default:
      return 'form_input_default'
  }
}
