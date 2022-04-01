import React from 'react'

import FormInput from '../components/formInput'

export default {
  title: 'Form Input'
}

export const Default = () => <FormInput />

export const WithLabel = () => <FormInput label="Username" />

export const WithErrorMessage = () => (
  <FormInput label="Username" errorMessage="Invalid username" hasError />
)
