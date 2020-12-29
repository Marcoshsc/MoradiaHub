import React from 'react'
import { MaskedInputProps } from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'
import { MaskedTextField } from './styles'

interface MaskOptions {
  prefix?: string
  suffix?: string
  includeThousandsSeparator?: boolean
  thousandsSeparatorSymbol?: string
  allowDecimal?: boolean
  decimalSymbol?: string
  decimalLimit?: number
  integerLimit?: number
  allowNegative?: boolean
  allowLeadingZeroes?: boolean
}

interface MaskedFieldProps {
  options: MaskOptions
  MaskedInputProps: MaskedInputProps
}

export function getMaskOptions(
  prefix: string | undefined,
  suffix: string | undefined,
  includeThousandsSeparator: boolean | undefined,
  thousandsSeparatorSymbol: string | undefined,
  allowDecimal: boolean | undefined,
  decimalSymbol: string | undefined,
  decimalLimit: number | undefined,
  integerLimit: number | undefined,
  allowNegative: boolean | undefined,
  allowLeadingZeroes: boolean | undefined
): MaskOptions {
  return {
    prefix,
    suffix,
    includeThousandsSeparator,
    allowDecimal,
    decimalLimit,
    decimalSymbol,
    integerLimit,
    allowLeadingZeroes,
    allowNegative,
    thousandsSeparatorSymbol
  }
}

export default function MaskedField({ options, MaskedInputProps }: MaskedFieldProps): JSX.Element {
  const mask = createNumberMask(options)

  return <MaskedTextField mask={mask} {...MaskedInputProps} />
}
