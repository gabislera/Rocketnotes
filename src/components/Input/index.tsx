import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import { Container, ErrorMessage } from './styles'
import { FieldError } from 'react-hook-form'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: any
  error?: FieldError
  isTitle?: any
}

const InputBase = (
  { icon: Icon, error, isTitle, ...rest }: InputProps,
  ref: any,
) => {
  return (
    <>
      <Container $isTitle={isTitle}>
        <input {...rest} ref={ref} />
        {Icon && <Icon size={20} />}
      </Container>
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  )
}

export const Input = forwardRef(InputBase)
