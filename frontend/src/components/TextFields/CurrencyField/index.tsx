import React from 'react'
import { MaskedInputProps } from 'react-text-mask'
import MaskedField, { getMaskOptions } from '../MaskedField'

type CurrencyLocales = 'pt'

interface CurrencyFieldProps {
  locale: CurrencyLocales
  MaskedInputProps: MaskedInputProps
}

function getDefaultMaskOptions(locale: CurrencyLocales) {
  switch (locale) {
    case 'pt':
      return getMaskOptions('R$', '', true, '.', true, ',', 2, 7, false, false)
    default:
      return getMaskOptions('R$', '', true, '.', true, ',', 2, 7, false, false)
  }
}

export default function CurrencyField({ locale, MaskedInputProps }: CurrencyFieldProps): JSX.Element {
  const defaultMaskOptions = getDefaultMaskOptions(locale)

  return <MaskedField options={defaultMaskOptions} MaskedInputProps={MaskedInputProps} />
}
