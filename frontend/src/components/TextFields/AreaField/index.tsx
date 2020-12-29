import React from 'react'
import { MaskedInputProps } from 'react-text-mask'
import MaskedField, { getMaskOptions } from '../MaskedField'

interface CurrencyFieldProps {
  MaskedInputProps: MaskedInputProps
}

function getDefaultMaskOptions() {
  return getMaskOptions('', 'm²', false, undefined, false, undefined, undefined, 4, false, false)
}

export default function AreaField({ MaskedInputProps }: CurrencyFieldProps): JSX.Element {
  const defaultMaskOptions = getDefaultMaskOptions()

  return <MaskedField options={defaultMaskOptions} MaskedInputProps={MaskedInputProps} />
}
